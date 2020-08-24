export enum elComponent {
  ElRow = 'ElRow',
  ElCol = 'ElCol',
  ElContainer = 'ElContainer',
  ElButton = 'ElButton',
  ElInput = 'ElInput',
  ElForm = 'ElForm',
  ElFormItem = 'ElFormItem',
  ElStep = 'ElStep',
  ElSteps = 'ElSteps',
  ElPagination = 'ElPagination',
  ElDatePicker = 'ElDatePicker',
  ElDropdown = 'ElDropdown',
  ElDropdownItem = 'ElDropdownItem',
  ElDropdownMenu = 'ElDropdownMenu',
  ElTree = 'ElTree',
  ElTable = 'ElTable',
  ElTableColumn = 'ElTableColumn',
  ElTabs = 'ElTabs',
  ElTabPane = 'ElTabPane',
  ElCheckbox = 'ElCheckbox',
  ElIcon = 'ElIcon',
  ElDialog = 'ElDialog',
  ElAutocomplete = 'ElAutocomplete',
  ElTooltip = 'ElTooltip',
  ElSelect = 'ElSelect',
  ElOption = 'ElOption',
  ElRadioGroup = 'ElRadioGroup',
  ElAvatar = 'ElAvatar',
  ElRadio = 'ElRadio',
  ElUpload = 'ElUpload',
  ElProgress = 'ElProgress',
  ElPopover = 'ElPopover',
  ElPageHeader = 'ElPageHeader',
  ElTag = 'ElTag',
}

export enum UserStatus {
  Active = 'Hoạt động',
  Pending = 'Đang chờ',
  Inactive = 'Không hoạt động',
}

export enum TabCfr {
  Feedback = 'Danh sách chờ Feedback',
  History = 'Lịch sử',
  Rank = 'Bảng xếp hạng',
}

export enum TabCfrEng {
  Feedback = 'feedback',
  History = 'history',
  Rank = 'rank',
}

export enum TabCheckins {
  MyOkrs = 'OKRs của tôi',
  CheckinResquest = 'Yêu cầu Check-in',
  CheckinCompany = 'OKRs công ty',
}

export enum AdminTabsVn {
  CycleOKR = 'Quản lý chu kỳ',
  Department = 'Quản lý phòng ban',
  JobPosition = 'Quản lý vị trí công việc',
  EvaluationCriterial = 'Quản lý tiêu chí đánh giá',
  MeasureUnit = 'Quản lý đơn vị đo lường',
}

export enum AdminTabsEn {
  CycleOKR = 'quan-ly-chu-ky',
  Department = 'quan-ly-phong-ban',
  JobPosition = 'quan-ly-vi-tri-cong-viec',
  EvaluationCriterial = 'quan-ly-tieu-chi-danh-gia',
  MeasureUnit = 'quan-ly-don-vi-do-luong',
}

export enum SidebarTabs {
  Dashboar = 'Dashboard',
  Checkin = 'Checkin',
  OKRs = 'OKRs',
  CFRs = 'CFRs',
  SettingCompany = 'Cài đặt công ty',
  ManageHumanResources = 'Quản lý nhân sự',
}

export enum ResourcesEnpoint {
  Auth = 'auth',
  Users = 'users',
  Lessons = 'lessons',
  ResetPassword = 'reset_password',
  Me = 'me',
  Job = 'jobs',
  Team = 'teams',
  Role = 'roles',
  CycleOKRs = 'cycles',
  EvaluationCriterial = 'evaluation_criterias',
  MeasureUnit = 'measure_units',
  MetaData = 'meta_data',
  Objective = 'objectives',
  KeyResults = 'key_results',
  Checkin = 'checkins',
  CFRs = 'cfrs',
  Dashboard = 'dashboard',
}

export enum CFREnpoint {
  ListWaiting = 'list_waiting',
  History = 'history',
  Rank = 'user_star',
  Recognition = 'user_recognition',
  Objective = 'list_okrs',
}

export enum EvaluationCriteriaEnum {
  MEMBER_TO_LEADER = 'MEMBER_TO_LEADER',
  LEADER_TO_MEMBER = 'LEADER_TO_MEMBER',
  EvaluationCriteria = 'evaluation_criteria',
  RECOGNITION = 'RECOGNITION',
}

/**
 * Vuex
 */
export enum DispatchAction {
  LOGIN = 'auth/login',
  LOGOUT = 'auth/logout',
  CLEAR = 'auth/clear',
  STAFF_OKRS = 'okrs/setStaffOkrs',
  CLEAR_OKRS = 'okrs/clearOkrs',
}

export enum GetterState {
  USER = 'auth/user',
  TEMP_CYCLE = 'cycle/cycleTemp',
}

export enum MutationState {
  SET_USER = 'auth/setUser',
  SET_TOKEN = 'auth/setToken',
  SET_TEMP_USER = 'user/setTempUser',
  SET_USERS = 'user/setUsers',
  SET_CURRENT_CYCLE = 'cycle/setCurrentCycle',
  SET_OBJECTIVE = 'okrs/setObjective',
  SET_KR = 'okrs/setKeyResult',
  CLEAR_KRS = 'okrs/clearKrs',
  SET_OKRS_DETAIL = 'okrs/setOkrsDetail',
  CLEAR_STAFF_OKRS = 'okrs/setStaffOkrs',
  SET_MEASURE_UNITS = 'measureUnit/setMeasureUnits',
  SET_TEMP_CYCLE = 'cycle/setTempCycle',
  SET_ALL_CYCLES = 'cycle/setAllCycles',
}
