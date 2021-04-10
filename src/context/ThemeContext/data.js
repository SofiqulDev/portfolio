import ngrx from "../../assets/ngrx.webp";
import react from '../../assets/react.webp';
import node from '../../assets/node.webp';
import js from '../../assets/js.webp';
import redux from '../../assets/redux.webp';
import angular from '../../assets/angular.webp';
import vue from '../../assets/vue.webp';
import php from '../../assets/php.webp';
import laravel from '../../assets/laravel.webp';

export const THEMES = {
    'react' : {
        backgroundImage: react,
        linearGradient: createLinearGradient('#61dafb', '#222222'),
        primaryColor: '#61dafb',
        color: '#222222'
    },
    'angular': {
        backgroundImage: angular,
        linearGradient:  createLinearGradient('#0043A9', '#B42B2C'),
        primaryColor: '#B52C2D',
        color: '#0043A9'
    },
    'vue': {
        backgroundImage: vue,
        linearGradient: createLinearGradient('#49D191', '#33475F'),
        primaryColor: '#33475F',
        color: '#49D191'
    },
    'node': {
        backgroundImage: node,
        linearGradient: createLinearGradient('#80BD01', '#333333'),
        primaryColor: '#333333',
        color: '#80BD01'
    },
    'javascript': {
        backgroundImage: js,
        linearGradient: createLinearGradient('#F7E018', '#000000'),
        primaryColor: '#F7E018',
        color: '#000000'
    },
    'rxjs': {
        backgroundImage: ngrx,
        linearGradient: createLinearGradient('#F80090', '#242A31'),
        primaryColor: '#F80090',
        color: '#242A31'
    },
    'redux': {
        backgroundImage: redux,
        linearGradient: createLinearGradient('#764ABD', '#1E1E1E'),
        primaryColor: '#764ABD',
        color: '#1E1E1E'
    },
    'ngrx': {
        backgroundImage: ngrx,
        linearGradient: createLinearGradient('#F80090', '#242A31'),
        primaryColor: '#F80090',
        color: '#242A31'
    },
    'php': {
        backgroundImage: php,
        linearGradient: createLinearGradient('#182f7a', '#39539e'),
        primaryColor: '#182f7a',
        color: '#182f7a'
    },
    'laravel': {
        backgroundImage: laravel,
        linearGradient: createLinearGradient('#c13c2a', '#fb503b'),
        primaryColor: '#fb503b',
        color: '#c13c2a'
    }
}

function createLinearGradient(color1, color2) {
    return `linear-gradient(to bottom right, ${color1} 0%, ${color2} 100%)`;
}
