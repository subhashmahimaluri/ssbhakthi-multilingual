import React, { useEffect, useState } from 'react';
import { YexaaPanchang } from '../lib/panchangam';
import { moonRiseSet, ITRFCoord } from '@/lib/moonRiseSet';
import { formatFullDate, formatFullDateWithWeekday, formatTimeIST, startEndDateFormat } from '@/utils/utils';
import Link from 'next/link';
import { Collapse } from 'react-bootstrap';
import AutoComplete from './AutoComplete';
import { useLocation } from '@/context/LocationContext';
import { MoonTime, PanchangamData, SunTime } from '@/types/panchangam';
import { useTranslation } from '@/hooks/useTranslation';

interface PanchangamProps {
  date?: string | Date;
}


export default function Panchangam({date} : PanchangamProps) {

    const [openCollapse, setOpenCollapse] = useState(false);
    const [panchangamData, setPanchangamData] = useState<PanchangamData>({});
    const [sunTime, setSunTime] = useState<SunTime>({});
    const [moonTime, setMoonTime] = useState<MoonTime>({});

    const { t } = useTranslation();

    const { lat, lng, city, timezone, country, setLocationData } = useLocation();

    const panchangamDate = date ? new Date("2025-06-26") : new Date();

    useEffect(() => {
        const calculatePanchangam = () => {
          try {
            const panchang = new YexaaPanchang();
    
            const panchangamCalendar = panchang.calendar(panchangamDate, lat, lng);
            const panchangamCalculate = panchang.calculate(panchangamDate);
    
            const sunTimes = panchang.sunTimer(panchangamDate, lat, lng);
    
            const dateForMoon = new Date(panchangamDate.getFullYear(), panchangamDate.getMonth(), panchangamDate.getDate());
            const groundPosition = ITRFCoord.fromGeodeticDeg(lat, lng, 0);
            const moonTimes = moonRiseSet(dateForMoon, groundPosition);
    
            const data: PanchangamData = {
              tithi: panchangamCalculate.Tithi?.name_en_IN || '',
              tithiTime: startEndDateFormat(panchangamCalculate.Tithi.start, panchangamCalculate.Tithi.end),
              nakshatra: panchangamCalculate.Nakshatra?.name_en_IN || '',
              nakshatraTime: startEndDateFormat(panchangamCalculate.Nakshatra.start, panchangamCalculate.Nakshatra.end),
              yoga: panchangamCalculate.Yoga?.name_en_IN || '',
              yogaTime: startEndDateFormat(panchangamCalculate.Yoga.start, panchangamCalculate.Yoga.end),
              karana: panchangamCalculate.Karna?.name_en_IN || '',
              karanaTime: startEndDateFormat(panchangamCalculate.Karna.start, panchangamCalculate.Karna.end),
              moonMasa: panchangamCalendar.MoonMasa?.name_en_IN || '',
              masa: panchangamCalendar.Masa?.name_en_IN || '',
              paksha: panchangamCalculate.Paksha?.name_en_IN || '',
              day: panchangamCalculate.Day?.name_en_UK || ''
            };
    
            setPanchangamData(data);
            setSunTime(sunTimes);
            setMoonTime(moonTimes);
          } catch (error) {
            console.error("Error calculating Panchangam:", error);
            setSunTime({});
            setMoonTime({});
            setPanchangamData({});
          }
        };
    
        calculatePanchangam();
      }, [lat, lng, date, panchangamDate]);

      console.log('sunTime', sunTime);
      console.log('moonTime', moonTime);
      console.log('panchangamData', panchangamData);

    const tithiHtml = (
    <>
    <div className="panchang-date">
      <ul className="list-unstyled gr-text-8 border-bottom pb-4">
        <li><span className="fw-bold">date</span> : <span>month</span></li>
        <li><span className="fw-bold">week_day</span> : <span>week_day</span></li>
        <li><span className="fw-bold">month</span> : <span>telugu_month</span></li>
        <li><span className="fw-bold">lunar_year</span> : <span>lunaryear</span></li>
        <li><span className="fw-bold">ruthu</span> : <span>ruthu</span></li>
        <li><span className="fw-bold">ayana</span> : <span>ayana</span></li>
      </ul>
    </div>
    <div className="panchang-date">
    <h4 className="gr-text-6 text-black">tithi</h4>
    <ul className="list-unstyled gr-text-8 border-bottom pb-4">
    </ul>
    </div>
    <div className="panchang-date">
          <h4 className="gr-text-6 text-black">nakshatra</h4>
          <ul className="list-unstyled gr-text-8 border-bottom pb-4">
                        <li><span className="fw-bold">name</span> : <span>start end</span></li>

          </ul>
        </div>
    </>
  );

 
  return (
    <>
      <div className="panchang-header text-black">
        <div className="d-flex w-100 align-items-center">
          <div className="pn-header-text flex-grow-1 pl-2">
            <div className="panchang-nav">
              <ul className="list-unstyled">
                <li className="nav-prev"><Link href={`/panchangam`}><i className="icon icon-small-left" />yesterday</Link></li>
                <li className="nav-prev"><Link href={`/panchangam`}>Today</Link></li>
                <li className="nav-next"><Link href={`/panchangam`}>tomorrow<i className="icon icon-small-right" /></Link></li>
              </ul>
            </div>
            <div className="panchang-title">
              <span className="icon-sprite icon-sprite-balaji"></span>
              <h4 className="text-black">{t.panchangam.panchang} {formatFullDate(panchangamDate)}</h4>
            </div>
            <div className="collapse-search">
                <button className="collapse-header" aria-expanded={openCollapse} aria-controls="collapse-text" onClick={() => setOpenCollapse(!openCollapse)}>{city}, {country}<i className="icon icon-small-down"></i></button>
                <Collapse in={openCollapse}>
                  <div id="collapse-text" className="mt-5">
                    <AutoComplete />
                  </div>
                </Collapse>
            </div>
          </div>
        </div>
      </div>
      <div className="panchang-secondary-header px-lg-14 px-md-12 px-sm-2">
        {/* Panchangam Slide */}
      </div>
      <div className="pricing-card gr-hover-shadow-1 bg-white border gr-text-color py-6 px-8">
        {tithiHtml}
        
        <div className="panchang-date">
          <h4 className="gr-text-6 text-black">sun_moon_time</h4>
          <ul className="list-unstyled gr-text-8">
            <li><span className="fw-bold">sunrise</span> : {formatTimeIST(sunTime.sunRise)}</li>
            <li><span className="fw-bold">sunset</span> : {formatTimeIST(sunTime.sunSet)}</li>
            <li><span className="fw-bold">moonrise</span> : {formatTimeIST(moonTime.rise)}</li>
            <li><span className="fw-bold">moonset</span> : {formatTimeIST(moonTime.set)}</li>
          </ul>
        </div>
      </div>
    </>
  );
}