'use strict'
const AccessControl = require('accesscontrol');

const grantList = [
    {role: 'Administrador', resource: 'application', action: 'read:any', attributes: '*'},
    {role: 'Administrador', resource: 'application', action: 'delete:any', attributes: '*'},

    {role: 'Operador', resource: 'application', action: 'read:any', attributes: '*'},

    {role: 'Gestor', resource: 'application', action: 'create:own', attributes: '*'},
    {role: 'Gestor', resource: 'application', action: 'read:own', attributes: '*'},
    {role: 'Gestor', resource: 'application', action: 'update:own', attributes: '*'},

    {role: 'Supervisor', resource: 'application', action: 'create:own', attributes: '*'},
    {role: 'Supervisor', resource: 'application', action: 'read:own', attributes: '*'},
    {role: 'Supervisor', resource: 'application', action: 'update:own', attributes: '*'},

    {role: 'Usuário', resource: 'application', action: 'create:own', attributes: '*'},
    {role: 'Usuário', resource: 'application', action: 'read:own', attributes: '*'},
    {role: 'Usuário', resource: 'application', action: 'update:own', attributes: '*'},
];

const ac = new AccessControl(grantList);

module.exports = ac;
