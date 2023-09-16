const Pagination = ({meta, searchObj}) => {
    const {page, pageCount,} = meta.pagination

    
    const pageCountArray = Array.from({length: pageCount}, (_, idx) => {
        const pageNum = (idx + 1).toString();
        const checkPage = !searchObj["page"] ? "1" : searchObj.page
        
        return <button key={pageNum} className={`join-item btn btn-xs sm:btn-md ${pageNum === checkPage && "btn-active" }`} name="page" value={pageNum}>{pageNum}</button>
    })

  return (
    <div className="flex justify-end pt-16">
        {pageCount > 1 && <div className="join">
          <button className="join-item btn btn-xs sm:btn-md" name="page" value={page - 1 === 0 ? pageCount : page - 1}>prev</button>
            {pageCountArray}
          <button className="join-item btn btn-xs sm:btn-md" name="page" value={page + 1 > pageCount ? 1 : page + 1}>next</button>
        </div>}
      </div>
  )
}
export default Pagination