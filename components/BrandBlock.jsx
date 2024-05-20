import { urlForImage } from '@/sanity/lib/image';

import blueprintBg from '../assets/images/blueprint-bg.jpg';

const BrandBlock = ({ color, text, image, order }) => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-0'>
      {/* COLOR CONTENT BLOCK */}
      <div
        className={`${blockStyles} ${
          order === 1 ? 'order-first' : 'order-last'
        }`}
        style={{
          backgroundImage: `url(${blueprintBg.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        <div
          className={`absolute top-0 right-0 bottom-0 left-0 z-10 flex flex-col justify-center items-center ${
            color === 'primary' ? 'bg-primary' : 'bg-secondary'
          }`}>
          <h2 className='max-w-full md:max-w-[75%] lg:max-w-[60%] px-6 md:px-0 text-[2.25rem] md:text-[2.75rem] lg:text-[3.25] leading-[2.75rem] md:leading-[3.25rem] lg:leading-[3.75rem] font-semibold'>
            {text}
          </h2>
        </div>
      </div>

      {/* PHOTO BLOCK */}
      <div
        className={`${blockStyles} ${
          order === 2 ? 'order-first' : 'order-last'
        }`}
        style={{
          backgroundImage: `url(${urlForImage(image.href)})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </section>
  );
};

const blockStyles = 'min-h-[50vh] sm:min-h-[100vh] md:min-h-[60vh] relative';

export default BrandBlock;
