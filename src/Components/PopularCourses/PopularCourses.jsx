import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import Slider from '../../common/Slider/Slider'
import { SwiperSlide } from 'swiper/react'
import CourseCard from '../CourseCard/CourseCard'

const popularCourses = [
  {
      id: 1,
      src: './src/assets/Images/Courses/Course-thumbnail-Dashboard2-1-768x432.webp',
      isOffer : true,
      offerPercent : 100,
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
      price: 0
  },
  {
      id: 2,
      src: './src/assets/Images/Courses/ezgif.com-jpg-to-webp-converted-33-1-768x432.webp',
      isOffer : true,
      offerPercent : 100,
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
      price: 0
  },
  {
      id: 3,
      src: './src/assets/Images/Courses/ezgif.com-jpg-to-webp-converted-22-1-768x432.webp',
      isOffer : true,
      offerPercent : 100,
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
      price: 0
  },
  {
      id: 4,
      src: './src/assets/Images/Courses/IMAGE-1402-09-30-20_33_36-1-768x432.webp',
      isOffer : true,
      offerPercent : 100,
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
  
      teacherName: '  آرمین هوشمند ',
      time: '00:21',
      studentCount : 24,
      offerPrice: 699000,
      price: 0
  },
  {
    id: 5,
    src: './src/assets/Images/Courses/IMAGE-1402-09-30-20_33_36-1-768x432.webp',
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

    teacherName: '  آرمین هوشمند ',
    time: '00:21',
    studentCount : 24,
    offerPrice: 699000,
    price: 0
}

]

function PresellCourses() {
  return (
    // PresellCourses Component
    <section className='mt-25'>
       <SectionTitle squareColor="bg-primary" title=" محبوب ترین دوره ها" subTitle=" پرمخاطب ترین و بهترین دوره های سبزلرن " isLink={true} to="" linkText="مشاهده همه دوره ها" />
       {/* PresellCourses */}
    
       <Slider>
         {
         
         popularCourses.map(({id, src , isOffer , offerPercent , category , title , description , teacherName , time , studentCount , offerPrice , price}) => {
           return(
             <React.Fragment key={id}>
                          <SwiperSlide>
                        <CourseCard src={src} isOffer={isOffer} offerPercent={offerPercent} category={category} title={title} teacherName={teacherName} time={time} studentCount={studentCount} offerPrice={offerPrice} price={price}/>
                          </SwiperSlide>
                    </React.Fragment>
                )
              })
        }
       </Slider>

    </section>
  )
}

export default PresellCourses

