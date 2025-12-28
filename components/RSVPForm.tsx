
import React, { useState } from 'react';
import { RSVPData } from '../types';
import { WEDDING_INFO } from '../constants';

/**
 * GOOGLE APPS SCRIPT CODE (Copy this into Extensions > Apps Script in your Google Sheet):
 * 
 * function doPost(e) {
 *   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *   var data = JSON.parse(e.postData.contents);
 *   sheet.appendRow([
 *     new Date(), 
 *     data.name, 
 *     data.phone, 
 *     data.guests, 
 *     data.attendance === 'yes' ? 'Có' : 'Không', 
 *     data.message
 *   ]);
 *   return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
 *     .setMimeType(ContentService.MimeType.JSON);
 * }
 */

const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState<RSVPData>({
    name: '',
    phone: '',
    guests: 1,
    attendance: 'yes',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (WEDDING_INFO.appsScriptUrl === 'YOUR_APPS_SCRIPT_WEB_APP_URL') {
        console.warn('Apps Script URL not set. Simulating success...');
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else {
        const response = await fetch(WEDDING_INFO.appsScriptUrl, {
          method: 'POST',
          mode: 'no-cors', // Apps Script requires no-cors for simple redirects or returns
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        // Note: With 'no-cors', we won't be able to read the response body,
        // but if it doesn't throw, it's usually successful.
      }
      setSubmitted(true);
    } catch (err) {
      console.error('RSVP Error:', err);
      setError('Có lỗi xảy ra khi gửi phản hồi. Vui lòng thử lại sau.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 p-10 rounded-3xl text-center shadow-inner max-w-md mx-auto animate-fade-in border border-green-100">
        <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl mb-2 text-green-800">Cảm Ơn Bạn!</h3>
        <p className="text-green-700 text-sm">Thông tin của bạn đã được ghi lại thành công.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-xs uppercase tracking-widest font-bold text-green-600 hover:text-green-800 transition-colors"
        >
          Gửi phản hồi khác
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-amber-100/50 border border-amber-50">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Họ và tên</label>
          <input 
            required
            type="text" 
            placeholder="Nhập tên của bạn"
            className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-amber-200 outline-none transition-all text-sm"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Số điện thoại</label>
          <input 
            required
            type="tel" 
            placeholder="Số điện thoại để liên lạc"
            className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-amber-200 outline-none transition-all text-sm"
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Số khách</label>
            <input 
              type="number" 
              min="1"
              className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-amber-200 outline-none transition-all text-sm"
              value={formData.guests}
              onChange={e => setFormData({...formData, guests: parseInt(e.target.value) || 1})}
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Tham dự?</label>
            <select 
              className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-amber-200 outline-none transition-all text-sm appearance-none cursor-pointer"
              value={formData.attendance}
              onChange={e => setFormData({...formData, attendance: e.target.value as 'yes' | 'no'})}
            >
              <option value="yes">Chắc chắn đến</option>
              <option value="no">Tiếc quá, vắng mặt</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Lời chúc</label>
          <textarea 
            rows={3}
            placeholder="Gửi lời chúc đến đôi bạn trẻ..."
            className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-amber-200 outline-none transition-all text-sm resize-none"
            value={formData.message}
            onChange={e => setFormData({...formData, message: e.target.value})}
          ></textarea>
        </div>
        
        {error && <p className="text-red-500 text-xs text-center italic">{error}</p>}

        <button 
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-lg ${
            loading 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-amber-800 text-white hover:bg-amber-900 shadow-amber-200'
          }`}
        >
          {loading ? 'Đang gửi...' : 'Xác nhận tham dự'}
        </button>
      </form>
    </div>
  );
};

export default RSVPForm;
