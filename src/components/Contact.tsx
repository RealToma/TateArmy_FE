import { Input } from '../common'
import { SOCIALMEDIAS } from '../constants'
import { Upload } from '../icons'

export const Contact = () => (
  <section className='w-full '>
    <div className='w-full container px-[2rem] lg:px-[206px] '>
      <div
        data-aos='fade-up'
        className='grid mt-[37px] gap-x-[23px] gap-y-[20px] grid-cols-1 lg:grid-cols-2'
      >
        <Input label='Wallet(sol)' />
        <Input label='Wallet(sol)' />
        <Input label='Twitter' />
        <Input label='Telegram' />
      </div>
      <label
        data-aos='fade-up'
        className=' inline-block cursor-pointer rounded-[15px] w-full border pt-[30px] pb-10 mt-[41px] border-dashed'
      >
        <input type='file' hidden />
        <div className='flex justify-center'>
          <Upload />
        </div>
        <p className='text-base mt-[9px] text-[#eeeeee] font-normal leading-6 text-center'>
          Drag & Drop your Screenshorts or{' '}
          <span className='text-[#001AFF]'>Choose files</span>
        </p>
      </label>
      <div data-aos='fade-up' className='flex pt-[42px] justify-center'>
        <button className='w-[366px] contact_submit_button py-3 text-base font-bold leading-6 text-center text-[#eeeeee] '>
          Submit
        </button>
      </div>
      <h1
        data-aos='fade-up'
        className='text-center mt-[48px] lg:mt-[75px] mb-[36px] text-[28px] lg:text-5xl text-[#eeeeee] font-normal lg:leading-[72px] font_this_coffee'
      >
        Contact Us
      </h1>
      <p
        data-aos='fade-up'
        className=' text-[14px] lg:text-lg text-[#eeeeee] font-medium lg:leading-6 text-center'
      >
        Email us at{' '}
        <a href='mailto:support@tatearmy.io' className='text-[#00FF06]'>
          support@tatearmy.io
        </a>
        for any <br /> queries or support
      </p>
      <div
        data-aos='fade-up'
        className='flex pb-[48px] justify-center gap-x-6 mt-[28px]'
      >
        {SOCIALMEDIAS.map((media) => (
          <a href={media.link} className='inline-block'>
            <img className='w-[40.39px] h-[40.39px]' src={media.img} alt='' />
          </a>
        ))}
      </div>
    </div>
  </section>
)
