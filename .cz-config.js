/*
 * @Date: 2022-10-07 21:33:44
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-02-25 14:07:40
 * @Description: git cz config
 */
module.exports = {
  types: [
    {
      value: ':sparkles: feat',
      name: 'â¨ feat:     æ°åè½',
    },
    {
      value: ':bug: fix',
      name: 'ð fix:      ä¿®å¤bug',
    },
    {
      value: ':tada: init',
      name: 'ð init:     åå§å',
    },
    {
      value: ':pencil2: docs',
      name: 'âï¸  docs:     ææ¡£åæ´',
    },
    {
      value: ':lipstick: style',
      name: 'ð style:    ä»£ç çæ ·å¼ç¾å',
    },
    {
      value: ':recycle: refactor',
      name: 'â»ï¸  refactor: éæ',
    },
    {
      value: ':zap: perf',
      name: 'â¡ï¸ perf:     æ§è½ä¼å',
    },
    {
      value: ':white_check_mark: test',
      name: 'â test:     æµè¯',
    },
    {
      value: ':rewind: revert',
      name: 'âªï¸ revert:   åé',
    },
    {
      value: ':package: build',
      name: 'ð¦ï¸ build:    æå',
    },
    {
      value: ':rocket: chore',
      name: 'ð chore:    æå»º/å·¥ç¨ä¾èµ/å·¥å·',
    },
    {
      value: ':construction_worker: ci',
      name: 'ð· ci:       CI related changes',
    },
    {
      value: ':arrow_down: down',
      name: 'â¬ï¸  down:     éçº§ä¾èµ',
    },
    {
      value: ':pushpin: pin',
      name: 'ð pin:      å°ä¾èµé¡¹åºå®å°ç¹å®çæ¬',
    },
    {
      value: ':art: art',
      name: 'ð¨ art:      æ¹è¿ä»£ç çç»æ/æ ¼å¼',
    },
    {
      value: ':fire: remove',
      name: 'ð¥ remove:   å é¤ä»£ç ææä»¶',
    },
    {
      value: ':ambulance: hotfix',
      name: 'ðï¸ hotfix:   ä¿®å¤ç´§æ¥bug',
    },
    {
      value: ':building_construction: arch',
      name: 'ðï¸ arch:      è¿è¡æ¶ææ´æ¹',
    },
  ],
  messages: {
    type: 'è¯·éæ©æäº¤ç±»å(å¿å¡«)',
    customScope: 'è¯·è¾å¥æä»¶ä¿®æ¹èå´(å¯é)',
    subject: 'è¯·ç®è¦æè¿°æäº¤(å¿å¡«)',
    body: 'è¯·è¾å¥è¯¦ç»æè¿°(å¯é)',
    breaking: 'ååºä»»ä½BREAKING CHANGES(å¯é)',
    footer: 'è¯·è¾å¥è¦å³é­çissue(å¯é)',
    confirmCommit: 'ç¡®å®æäº¤æ­¤è¯´æåï¼',
  },
  allowCustomScopes: true,
  allowBreakingChanges: [':sparkles: feat', ':bug: fix'],
  subjectLimit: 72,
}
