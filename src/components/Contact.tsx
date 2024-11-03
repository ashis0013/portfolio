import { Button } from './Navbar'
import { FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'

export const Contact = () => {
  return (
    <div
      id='contact'
      className='max-w-[920px] w-full h-screen mx-auto text-left flex flex-col justify-center px-8'
    >
      <div className='text-2xl md:text-4xl text-lprimary dark:text-dprimary mb-8 font-mono'>
        contact
      </div>
      <div className='grid grid-cols-1 md:grid-cols-5'>
        <div className='mr-8 mb-8 md:col-span-3'>
          <p className='text-base md:text-lg text-ltext dark:text-dtext my-8'>
            I am not actively looking for any new roles right now but feel free to reach out to me
            for any discussions or opportunities. We can also talk about music theory if you want
            😃.
          </p>
          <div>
            <Button
              name='Contact Ashis'
              onClick={() => {
                window.open('mailto:paulashis0013@gmail.com');
              }}
            />
          </div>
        </div>
        <div className='my-8 md:col-span-2'>
          <div className='font-bold text-lsubtext dark:text-dsubtext text-2xl'>
            Find Ashis elsewhere
          </div>
          <div className='w-full px-16 h-[1px] bg-lsubtext dark:bg-dsubtext mt-2'></div>
          <div className='flex justify-between w-full mt-4'>
            <a
              href='https://www.linkedin.com/in/ashis-paul-173479150/'
              target='_blank'
              rel='noreferrer'
            >
              <FiLinkedin className='text-ltext dark:text-dtext' size={25} />
            </a>
            <a href='https://github.com/ashis0013' target='_blank' rel='noreferrer'>
              <FiGithub className='text-ltext dark:text-dtext' size={25} />
            </a>
            <a
              href='https://scholar.google.com/citations?user=CPM11WAAAAAJ'
              target='_blank'
              rel='noreferrer'
            >
              <SiGooglescholar className='text-ltext dark:text-dtext' size={25} />
            </a>
            <a href='https://twitter.com/paulashis0013' target='_blank' rel='noreferrer'>
              <FiTwitter className='text-ltext dark:text-dtext' size={25} />
            </a>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
