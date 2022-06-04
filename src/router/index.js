import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import StudentHome from '@/components/StudentComponents/StudentHome'
import StudentIndex from '@/components/StudentComponents/home/Appindex'
import StudentCourseIndex from '@/components/StudentComponents/course/CourseIndex'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/stu/home',
      name: 'StudentHome',
      component: StudentHome,
      // home页面并不需要被访问,仍通过index访问首页，home不被感知
      redirect: '/stu/index',
      children: [
        {
          path: '/stu/index',
          name: 'StudentIndex',
          component: StudentIndex,
          meta: { //  元数据：页面需要拦截
            requireAuth: true
          }
        },
        {
          path: '/stu/courses',
          name: 'StudentCourseIndex',
          component: StudentCourseIndex,
          meta: {
            requireAuth: true
          }
        }
      ]
    }

  ]
})
