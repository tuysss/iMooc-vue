import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
// import Error from '@/components/404'
import StudentHome from '@/components/StudentComponents/StudentHome'
import StudentIndex from '@/components/StudentComponents/home/Appindex'
import StudentCourseIndex from '@/components/StudentComponents/course/CourseIndex'
import StudentLearnIndex from '@/components/StudentComponents/learn/LearnIndex'
import StudentJotterIndex from '@/components/StudentComponents/jotter/Articles'
import StudentInfo from '@/components/StudentComponents/info/InfoIndex'

import TeacherHome from '@/components/TeacherComponents/TeacherHome'
import TeacherIndex from '@/components/TeacherComponents/home/Appindex'
import TeacherCourseIndex from '@/components/TeacherComponents/course/CourseIndex'
import TeacherStudentIndex from '@/components/TeacherComponents/student/StudentIndex'
import TeacherInfo from '@/components/TeacherComponents/info/InfoIndex'

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
        },
        {
          path: '/stu/learn',
          name: 'StudentLearnIndex',
          component: StudentLearnIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/stu/jotter',
          name: 'StudentJotterIndex',
          component: StudentJotterIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/stu/info',
          name: 'StudentInfo',
          component: StudentInfo,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/tea/home',
      name: 'TeacherHome',
      component: TeacherHome,
      // home页面并不需要被访问,仍通过index访问首页，home不被感知
      redirect: '/tea/index',
      children: [
        {
          path: '/tea/index',
          name: 'TeacherIndex',
          component: TeacherIndex,
          meta: { //  元数据：页面需要拦截
            requireAuth: true
          }
        },
        {
          path: '/tea/course',
          name: 'TeacherCourseIndex',
          component: TeacherCourseIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/tea/student',
          name: 'TeacherStudentIndex',
          component: TeacherStudentIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/tea/info',
          name: 'TeacherInfo',
          component: TeacherInfo,
          meta: {
            requireAuth: true
          }
        }
      ]
    }/* ,
    {
      path: '*',
      component: Error
    } */

  ]
})
