<template>
  <div id="coze-chat-container"></div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.5/libs/cn/index.js';
    script.onload = () => {
      new CozeWebSDK.WebChatClient({
        config: {
          bot_id: '7488339718729089060',
        },
        componentProps: {
          title: 'Coze',
        },
        auth: {
          type: 'token',
          token: 'pat_zgMW7Uk2tdAgZPuUFh8Tb73wuUU5FL5gypI3hehTFwoOJCL8C7qWYVqN30wcCphg',
          onRefreshToken: function () {
            return 'pat_zgMW7Uk2tdAgZPuUFh8Tb73wuUU5FL5gypI3hehTFwoOJCL8C7qWYVqN30wcCphg';
          },
          allowPersonalAccessTokenInBrowser: true
        },
        ui:{
            chatBot: {
                title: "AI聊天",
                uploadable: true,
                icon: 'https://images.hoshinoai.xin/icon/algorithm.webp',
                    },
            base: {
                icon: 'https://images.hoshinoai.xin/icon/algorithm.webp',
                zIndex: 1000,
                },
            footer: {
                isShow: true,
                expressionText: 'AI聊天由{{hoshinoai}}基于{{coze}}开发',
                linkvars: {
                hoshinoai: {
                    text: 'Hoshinoai',
                    link: 'https://hoshinoai.xin/'
                        },
                coze: {
                    text: '扣子',
                    link: 'https://www.coze.cn/'
                        }
                        }
                    }
            
            }
      });
    };
    document.body.appendChild(script);
  },
};
</script>    