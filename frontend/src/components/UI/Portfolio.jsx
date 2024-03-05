import React,{useState,useEffect} from 'react'
import data from '../../assets/data/portfolioData'
import Modal from './Modal';

const Portfolio = () => {
    const [nextItems,setNextItems] = useState(6);
    const [portfolio,setPortfolio] = useState(data)
    const [selectTab,setSelectTab] = useState('')
    const [showModal,setShowModal] = useState(false);
    const [activeId,setActiveId] = useState(null)
    
    const loadMore = ()=>{
        setNextItems(prev => prev + 3)
    }

    const showModalHandler = (id)=>{
        setShowModal(true)
        setActiveId(id)
    }

    useEffect(()=>{
        if(selectTab === 'all'){
            setPortfolio(data)
        }
        if(selectTab === 'web design'){
            const filterData = data.filter(item=> item.category == "Web Design")
            setPortfolio(filterData)
        }
        if(selectTab === 'ux'){
            const filterData = data.filter(item=> item.category == "ux")
            setPortfolio(filterData)
        }
    },[selectTab])


  return (
    <section id='portfolio'>
        <div className="container">
            <div className="flex items-center justify-between flex-wrap mt-12">
                <div className='mb-7 sm:mb-0'>
                    <h3 className='text-headingColor text-[2rem] font-[700]'>My Recent Projects</h3>
                </div>


                <div className='flex gap-3'>
                    <button onClick={()=> setSelectTab("all")} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4
                    rounded-[8px]'>All</button>
                    <button onClick={()=> setSelectTab("web design")}  className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4
                    rounded-[8px]'>Web Design</button>
                    <button onClick={()=> setSelectTab("ux")} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4
                    rounded-[8px]'>Backend Projects</button>
                </div>
            </div>


            <div className='flex items-center gap-4 flex-wrap mt-12'>
                {
                    portfolio?.slice(0,nextItems)?.map((port,i)=>{
                        return(
                            <div key={i} data-aos='fade-zoom-in' data-aos-delay='50' data-aos-duration='1000' className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                                 <figure>
                                    <img className='rounded-[8px]' src={port.imgUrl} alt="" />
                                 </figure>

                                 <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5]
                                 hidden group-hover:block'>
                                    <div className='w-full h-full flex items-center justify-center'>
                                        <button onClick={()=>showModalHandler(port.id)} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px]
                                        font-[500] ease-in duration-200'>
                                            See Details
                                        </button>
                                    </div>
                                 </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='text-center mt-6'>
                {
                    nextItems < portfolio.length && data.length  > 6 &&( 
                    <button className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px]
                    font-[500] ease-in duration-200' onClick={loadMore}>
                    Load More
                    </button>)
                }
            </div>
        </div>

    {
        showModal && <Modal setShowModal={setShowModal} activeId={activeId}/>
    }
    </section>
  )
}

export default Portfolio