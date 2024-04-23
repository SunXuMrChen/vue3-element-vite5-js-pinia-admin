import { ref } from 'vue'

function usePageContent() {
  const contentRef = ref(null)
  function handleQueryClick(queryInfo) {
    contentRef.value?.fetchPageListData(queryInfo)
  }
  function handleResetClick() {
    contentRef.value?.fetchPageListData()
  }

  return {
    contentRef,
    handleQueryClick,
    handleResetClick
  }
}

export default usePageContent
