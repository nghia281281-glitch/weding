
import React from 'react';
import { CoupleInfo } from './types';

export interface ExtendedCoupleInfo extends CoupleInfo {
  googleMapsUrl: string;
  appsScriptUrl: string; // URL from "Deploy -> Web App" in Apps Script
}

export const WEDDING_INFO: ExtendedCoupleInfo = {
  groom: 'Gia Minh',
  bride: 'Ngọc Lan',
  date: '2025-10-25T17:00:00',
  venue: 'Nhà của Nghĩa',
  address: 'Sơn Nguyên, Sơn Hòa, Phú Yên',
  googleMapsUrl: 'https://www.google.com/maps/place/Nh%C3%A0+th%E1%BB%9D+S%C6%A1n+Nguy%C3%AAn/@13.0837983,109.0193911,17z/data=!3m1!4b1!4m6!3m5!1s0x316fc5dd5dce0eaf:0x9d84ca2d2a7744c2!8m2!3d13.0837931!4d109.021966!16s%2Fg%2F11dxj14k4y?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D',
  // User needs to replace this after deploying the script in Google Sheets
  appsScriptUrl: 'YOUR_APPS_SCRIPT_WEB_APP_URL' 
};

export const HEART_SVG = (
  <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);
