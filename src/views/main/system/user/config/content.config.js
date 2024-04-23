const contentConfig = {
  pageName: 'users',
  header: {
    title: '用户列表',
    btnTitle: '新建用户'
  },
  propsList: [
    { type: 'selection', label: '选择', width: '80px' },
    { type: 'normal', label: 'id', prop: 'id', width: '80px' },
    { type: 'normal', label: '用户名', prop: 'name', width: '150px' },
    { type: 'normal', label: '真实姓名', prop: 'realname', width: '150px' },
    { type: 'normal', label: '手机号码', prop: 'cellphone', width: '150px' },
    { type: 'normal', label: '状态', prop: 'enable', width: '150px' },
    { type: 'timer', label: '创建时间', prop: 'createAt' },
    { type: 'timer', label: '更新时间', prop: 'updateAt' },
    { type: 'handler', label: '操作' }
  ]
}

export default contentConfig
