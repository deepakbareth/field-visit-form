export function SubmitButton({ isSubmitting }) {
    return (
        <>
         <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-5 py-2.5  cursor-pointer rounded-xl font-bold text-white text-sm transition-allflex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-bold  bg-blue-500  rounded-xl transition-all border 
        ${isSubmitting
                      ? 'bg-blue-300 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 shadow-md active:scale-95'}`}
                >
                  {isSubmitting ? '...' : 'Submit'}
                </button>
        
        </>
    )
    }