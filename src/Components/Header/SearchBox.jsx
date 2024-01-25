import React from 'react'
import { Search } from '@mui/icons-material'
import { Box, Fade, Modal ,Backdrop} from '@mui/material'
import { useOpenClose } from '../../Contexts/openCloseContext'

function SearchBox() {
  const {openClose , setOpenClose} = useOpenClose()
  console.log(openClose)
  return (
    <>
       {/* Search Box in XL */}
       <div className="relative group hidden lg:block">
        <form className='hidden xl:block'>
        <label className='relative h-14 block transition-all'>
        <input type='text' className='rounded-full dark:focus:text-white outline-none text-slate-500 dark:text-gray-600 placeholder:text-slate-500 dark:placeholder-gray-600 w-48 focus:w-64 h-full border border-transparent hover:border-gray-200 dark:border-gray-700 focus:text-zinc-700 dark:focus:border-gray-600 bg-gray-100 dark:bg-gray text-base placeholder:text-lg pl-14 pr-5 block transition-all' placeholder='جستجو'/>
          <button className="absolute left-5 top-0 bottom-0 w-7 h-7 my-auto text-slate-500 dark:text-gray-600">
            <Search />
          </button>
        </label>
        </form>
       </div>
       {/* Search Box in LG */}
       <div className='xl:hidden'>
        <div onClick={() => setOpenClose((perev) => !perev)} className='flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 dark:bg-transparent dark:border dark:border-gray-700 dark:hover:border-gray-600 transition-colors cursor-pointer'>
          <Search />
        </div>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openClose}
        onClose={() => setOpenClose((perev) => !perev)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openClose}>
          <Box className="absolute left-28 top-28 z-10">
           <label className='relative block w-64'>
           <input type='text' className='w-full h-16 pr-7 pl-16 text-lg outline-none bg-white dark:bg-gray-700 placeholder:text-slate-500 dark:placeholder:text-gray-600 text-zinc-700 dark:text-gray-500 rounded-2xl' placeholder='جستجو در بین دوره ها'/>
           <button className="absolute left-5 top-0 bottom-0 w-7 h-7 my-auto text-slate-500 dark:text-gray-600">
            <Search />
          </button></label>
          </Box>
        </Fade>
      </Modal>
       </div>
    </>
  )
}

export default SearchBox
