import { Search } from '@mui/icons-material'
import React from 'react'
import CourseCard from '../../Components/CourseCard/CourseCard'
import TopSort from '../../Components/TopSort/TopSort'
import useTitle from '../../Hooks/useTitle'
import TopPageTitle from '../../Components/TopPageTitle/TopPageTitle'
import SearchFilter from '../../Components/SearchFilter/SearchFilter'

const categoryCourses = [
  {
      id: 1,
      src: '../src/assets/Images/Courses/Course-thumbnail-Dashboard2-1-768x432.webp',
      isOffer : true,
      offerPercent : 60,
      category :  [{
              id: 1,
              categoryTitle: 'فرانت اند',
              categoryLink : ''
      }],
      title: 'پیاده سازی داشبورد های حرفه ای با CSS و JS',
      description: 'این دوره فرصتی فوق‌العاده برای ارتقاء مهارت‌های فرانت اند شماست. با یادگیری از جدیدترین تکنیک‌ها، انیمیشن‌ها ، ابزارهای پیشرفته',
      teacherName: 'مهرشاد براتی',
      time: '07:08',
      studentCount : 282,
      offerPrice: 620000,
      price: 248000
  },
  {
      id: 2,
      src: '../src/assets/Images/Courses/ezgif.com-jpg-to-webp-converted-33-1-768x432.webp',
      isOffer : true,
      offerPercent : 60,
      category : [{
          id: 1,
          categoryTitle: ' ارتقای مهارت ها',
          categoryLink : ''
  }],
      title: 'Clean Code برای برنامه نویسان JS',
      description: ' فرق بین یه برنامه‌نویس تازه‌کار و حرفه‌ای نوع دیدگاه و طرز کدنویسیشونه. برنامه‌نویس حرفه‌ای کدی رو می‌نویسه که تست‌پذیر باشه ',
      teacherName: ' محمدامین سعیدی راد',
      time: '02:18',
      studentCount : 232,
      offerPrice: 1100000,
      price: 440000
  },
  {
      id: 3,
      src: '../src/assets/Images/Courses/ezgif.com-jpg-to-webp-converted-22-1-768x432.webp',
      isOffer : true,
      offerPercent : 60,
      category : [{
          id: 1,
          categoryTitle: ' بک اند ',
          categoryLink : ''
  }],
      title: 'آموزش حرفه ای NodeJS بدون پیش نیاز',
      description: ' الان و امروز کمتر کسی هست که از بازار کار داغ نود جی اس با خبر نباشه و یکی از ',
      teacherName: ' محمدامین سعیدی راد',
      time: '61:45',
      studentCount : 432,
      offerPrice: 4350000,
      price: 1740000
  },
  {
      id: 4,
      src: '../src/assets/Images/Courses/IMAGE-1402-09-30-20_33_36-1-768x432.webp',
      isOffer : true,
      offerPercent : 60,
      category : [{
          id: 1,
          categoryTitle: ' بک اند ',
          categoryLink : ''
  },
  {
      id: 2,
      categoryTitle: ' پی اچ پی ',
      categoryLink : ''
}
],
      title: ' دوره پروژه محور لایووایر (Livewire Master)',
      description: ' دوره لایووایر مستر (Livewire Master) یک دوره‌ی تمام عیار برای فول‌استک فریمورکِ لایووایر است که هدف آن آموزش قدم به ',
      teacherName: '  آرمین هوشمند ',
      time: '00:21',
      studentCount : 24,
      offerPrice: 699000,
      price: 279600
  }
]


function Category() {
  const title = useTitle("فرانت اند - سبزلرن")
  return (
    <>
  {/* Category Title */}
   <TopPageTitle title="فرانت اند" bgColor="bg-rose-500" /> 
{/* Main Section */}
<section className='grid items-start grid-rows-1 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-5 mt-9 sm:mt-25'>
     {/* Sidebar */}
     <SearchFilter />
     {/* Main Content */}
     <section className='col-span-1 lg:col-span-2 xl:col-span-3 order-1 lg:order-2'>
           {/* Sort In Mobile */}
           <div className='flex sm:hidden items-center gap-3.5 mb-7'>
          <div className='flex items-center justify-center gap-x-2 w-1/2 py-2 px-4 text-sm text-zinc-700 dark:text-white bg-white dark:bg-gray-800 rounded-xl select-none'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>
 <span>فیلتر</span>
          </div>
          <div className='flex-center gap-x-2 w-1/2 py-2 px-4 text-sm text-zinc-700 dark:text-white bg-white dark:bg-gray-800 rounded-xl select-none'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25.811 17.879" className="size-6 text-gray-500" stroke="currentColor"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
        <path d="M.556,16.379V0" transform="translate(4.349)"/>
        <path d="M9.809,0,4.9,4.927,0,0" transform="translate(0 11.452)"/>
        <path d="M5.5.5H0" transform="translate(15.316 10.415)"/>
        <path d="M7.322.5H0" transform="translate(15.316 4.883)"/>
        <path d="M3.314.5H0" transform="translate(15.316 15.708)"/>
        <path d="M8.684.5H0" transform="translate(15.316 0.072)"/>
    </svg>
     <span>همه دوره‌ ها</span>
          </div>
        </div>
         {/* Sort */}
          <TopSort BtnOne=" همه دوره ها" BtnTwo="ارزان ترین" BtnThree=" گران ترین" BtnFour="پرمخاطب‌ها" />
          {/* Course List */}
          <div className='grid grid-rows-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'>
        {
            categoryCourses.map(({id, src , isOffer , offerPercent , category , title , description , teacherName , time , studentCount , offerPrice , price}) => {
                return(
                    <React.Fragment key={id}>
                        <CourseCard src={src} isOffer={isOffer} offerPercent={offerPercent} category={category} title={title} description={description} teacherName={teacherName} time={time} studentCount={studentCount} offerPrice={offerPrice} price={price}/>
                    </React.Fragment>
                )
            })
        }
     </div>
     </section>
</section>
    </>
  )
}

export default Category