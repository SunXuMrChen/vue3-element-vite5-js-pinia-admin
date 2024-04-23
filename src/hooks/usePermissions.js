import useLoginStore from '@/store/login/login'

function usePermissions(permissionID) {
  const loginStore = useLoginStore()
  const { permissions } = loginStore

  return !!permissions.find((item) => item.includes(permissionID))
}

export default usePermissions
