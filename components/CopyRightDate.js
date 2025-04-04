import { siteConfig } from '@/lib/config'

/**
 * 网站版权日期
 * 示例： 2021-2024
 * @returns
 */
export default function CopyRightDate() {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

    return (
      <span className='whitespace-nowrap flex items-center gap-x-1'>
        <i className='fa-solid fa-registered' />
        <span>{copyrightDate}</span>
        <a
          href={siteConfig('LINK')}
          className='underline font-semibold dark:text-gray-300'>
          Spring
        </a>
        <svg
          width="22px"
          height="22px"
          className="sakura-svg rotate-icon"
          viewBox="0 0 1049 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M525.58396628 573.34694353s268.83106938-2.62915481 309.36387092 193.24287089l-76.46458293 21.90962291 12.92667757 84.13295086a214.05701289 214.05701289 0 0 1-96.84053193-4.82011663A224.79272784 224.79272784 0 0 1 525.58396628 578.38615666z"
            fill="#EE9ca7"
          ></path>
          <path
            d="M552.75189802 512.4381922s131.45773592-233.7756732 321.63325979-170.89505575L854.2283053 418.66500728l79.31283344 30.89256828a215.59068679 215.59068679 0 0 1-52.58309388 81.50379604 224.57363215 224.57363215 0 0 1-325.35789552-14.67944718z"
            fill="#EE9ca7"
          ></path>
          <path
            d="M508.49446078 494.0341093S317.00435871 306.48774025 426.77156822 139.31731943l69.4535037 38.78003191L547.4935884 109.30113636a214.05701289 214.05701289 0 0 1 65.72886796 71.86356201 225.01182435 225.01182435 0 0 1-98.37420505 310.67844912z"
            fill="#EE9ca7"
          ></path>
          <path
            d="M473.21996809 525.58396628S242.2925454 661.64272234 109.30113636 512.4381922l55.43134521-57.18411482-53.45947909-65.72886795a213.61882069 213.61882069 0 0 1 86.32391269-43.81924506 224.79272784 224.79272784 0 0 1 274.527572 175.27698099z"
            fill="#EE9ca7"
          ></path>
          <path
            d="M481.76472043 566.55496s72.0826585 258.31445093-106.4807652 348.14390364l-40.31370582-68.13892627-78.21735252 34.17901099a212.30424328 212.30424328 0 0 1-20.15685331-94.64956933 224.57363215 224.57363215 0 0 1 241.00584894-219.09622602z"
            fill="#EE9ca7"
          ></path>
        </svg>
      </span>
    ) 
}
