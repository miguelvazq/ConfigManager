'use strict';

export default {
    tree: {
        base: {
            listStyle: 'none',
            backgroundColor: '$nav-bg',
            margin: 0,
            padding: 0,
            color: '$white',
            fontFamily: '$fontFamily',
            fontSize: '14px'
        },
        node: {
            base: {
                position: 'relative',
                padding: '5px 0'
            },
            link: {
                cursor: 'pointer',
                position: 'relative',
                padding: '0px 5px',
                display: 'block'
            },
            activeLink: {
                background: '#0077CC'
            },
            toggle: {
                base: {
                    position: 'relative',
                    display: 'inline-block',
                    verticalAlign: 'top',
                    marginLeft: '-5px',
                    height: '24px',
                    width: '24px'
                },
                wrapper: {
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    margin: '-7px 0 0 -7px',
                    height: '14px'
                },
                height: 8,
                width: 8,
                arrow: {
                    fill: '#fff',
                    strokeWidth: 0
                }
            },
            header: {
                base: {
                    display: 'inline-block',
                    verticalAlign: 'top',
                    color: '$white'
                },
                connector: {
                    width: '2px',
                    height: '12px',
                    borderLeft: 'solid 2px black',
                    borderBottom: 'solid 2px black',
                    position: 'absolute',
                    top: '0px',
                    left: '-21px'
                },
                title: {
                    lineHeight: '24px',
                    verticalAlign: 'middle'
                }
            },
            subtree: {
                listStyle: 'none',
                paddingLeft: '29px'
            },
            loading: {
                color: '#E2C089'
            }
        }
    }
};
