import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="#3cda83"
        d="M11.575 12.683c-0.396 0.006 0.075 0.204 0.592 0.283 0.143-0.112 0.273-0.224 0.389-0.334-0.323 0.079-0.651 0.08-0.981 0.051M13.694 12.15c0.236-0.326 0.409-0.684 0.469-1.052-0.053 0.263-0.196 0.49-0.33 0.73-0.74 0.466 -0.069-0.277 0 -0.559-0.796 1.002-0.109 0.602-0.139 0.881M14.494 11.092c0.048-0.712-0.141-0.489-0.204-0.216 0.074 0.038 0.132 0.502 0.204 0.216M10.07 0.309c0.212 0.038 0.457 0.067 0.423 0.118 0.232-0.051 0.284-0.097 -0.423-0.118M10.493 0.427l-0.15 0.031 0.139-0.012 0.011-0.019M17.118 10.369c0.024 0.643-0.187 0.953-0.378 1.508l-0.343 0.172c-0.281 0.545 0.027 0.346-0.174 0.78-0.438 0.39-1.334 1.221-1.614 1.295-0.208-0.005 0.141-0.246 0.187-0.34-0.587 0.403-0.471 0.605-1.37 0.85l-0.026-0.058c-2.211 1.039-5.292-1.022-5.251-3.857-0.024 0.178-0.067 0.134-0.116 0.206-0.114-1.451 0.668-2.901 1.993-3.494 1.291-0.637 2.809-0.377 3.731 0.484-0.509-0.664-1.522-1.375-2.719-1.306-1.173 0.019-2.273 0.766-2.637 1.577-0.602 0.379-0.67 1.46-0.933 1.659-0.349 2.594 0.664 3.711 2.384 5.03 0.271 0.183 0.076 0.21 0.113 0.347-0.572-0.267-1.095-0.67-1.523-1.16 0.228 0.333 0.474 0.656 0.793 0.914-0.539-0.183-1.257-1.306-1.47-1.35 0.928 1.66 3.769 2.918 5.254 2.294-0.689 0.025-1.563 0.014-2.337-0.273-0.325-0.167-0.764-0.512-0.687-0.577 2.032 0.757 4.125 0.574 5.885-0.834 0.446-0.347 0.933-0.937 1.075-0.945-0.212 0.32 0.164 0.153 0-0.321 0.444-0.717-0.194-0.29 0.459-1.239l0.241 0.332c-0.09-0.595 0.74-1.318 0.656-2.26 0.19-0.29 0.212 0.309 0.01 0.972 0.281-0.735 0.083-0.853 0.156-1.458 0.078 0.203 0.18 0.42 0.233 0.634-0.183-0.709 0.289-1.194 0.379-1.611-0.09-0.04-0.282 0.312-0.326-0.522 0.006-0.365 0.101-0.191 0.138-0.271-0.071-0.041-0.26-0.32-0.373-0.859 0.083-0.127 0.221 0.329 0.332 0.329-0.072-0.425-0.197-0.736-0.202-1.092-0.329-0.688-0.117 0.403-0.383-0.015-0.35-1.091 0.29-0.253 0.332-0.751 0.53 0.77 0.833 1.965 0.973 2.457-0.106-0.598-0.277-1.185-0.487-1.777 0.161 0.068-0.26-1.242 0.21-0.378-0.502-1.844-2.145-3.574-3.638-4.376 0.185 0.169 0.418 0.381 0.333 0.415-0.751-0.447-0.62-0.482-0.724-0.671-0.616-0.251-0.657-0.023-1.062-0.059-1.156-0.614-1.379-0.545-2.44-0.93l0.048 0.226c-0.765-0.254-0.891 0.097-1.72 0.001-0.05-0.039 0.265-0.142 0.524-0.18-0.739 0.098-0.707-0.146-1.433 0.027 0.178-0.125 0.367-0.21 0.557-0.317-0.602 0.037-1.441 0.352-1.182 0.065-0.984 0.439-2.734 1.047-3.71 1.972l-0.03-0.207c-0.449 0.539-1.967 1.614-2.087 2.307l-0.12 0.033c-0.235 0.399-0.39 0.844-0.571 1.258-0.308 0.522-0.445 0.198-0.404 0.279-0.601 1.221-0.901 2.244-1.16 3.088 0.184 0.275-0.004 1.657 0.074 2.763-0.301 5.467 3.823 10.785 8.347 11.984 0.662 0.237 1.648 0.228 2.487 0.252-0.988-0.283-1.117-0.149-2.075-0.481-0.693-0.326-0.842-0.696-1.33-1.12l0.195 0.344c-0.965-0.341-0.544-0.422-1.345-0.67l0.208-0.272c-0.311-0.024-0.827-0.525-0.967-0.804l-0.342 0.014c-0.411-0.508-0.631-0.874-0.615-1.157l-0.11 0.197c-0.125-0.214-1.517-1.904-0.795-1.513-0.132-0.122-0.308-0.199-0.484-0.547l0.146-0.167c-0.345-0.443-0.638-1.01-0.617-1.201 0.185 0.25 0.312 0.297 0.434 0.337-0.869-2.161-0.917 0.167-1.584-2.145l0.14-0.011c-0.107-0.161-0.172-0.336-0.259-0.508l0.061-0.607c-0.629-0.728-0.176-3.091 0.059-4.388 0.063-0.526 0.522-1.09 0.872-1.96l-0.214-0.037c0.411-0.717 2.345-3.439 3.231-3.302 0.432-0.544-0.173-0.001-0.249-0.139 0.949-0.984 1.249-0.695 1.889-0.87 0.693-0.409-0.593-0.146-0.264-0.477 1.195-0.305 0.845-0.692 2.392-0.847 0.164 0.094-0.382 0.145-0.52 0.266 0.998-0.488 3.156-0.378 4.556 0.272 1.623 0.758 3.449 2.998 3.526 5.109l0.082 0.022c-0.042 0.841 0.134 1.813-0.166 2.707l0.195-0.421M7.23 13.217l-0.056 0.278c0.26 0.354 0.467 0.738 0.808 1.019-0.24-0.467-0.418-0.661-0.752-1.297M7.851 13.193c-0.138-0.152-0.22-0.336-0.311-0.518 0.087 0.322 0.266 0.602 0.433 0.88l-0.122-0.362M18.787 10.817l-0.058 0.146c-0.107 0.758-0.337 1.505-0.69 2.204 0.391-0.735 0.644-1.555 0.748-2.35M10.151 0.119c0.268-0.098 0.659-0.054 0.944-0.119-0.37 0.031-0.74 0.05-1.105 0.097l0.161 0.022M0.703 5.134c0.062 0.572-0.43 0.798 0.11 0.417 0.289-0.65-0.113-0.203-0.11-0.417M0.067 7.784c0.124-0.381 0.147-0.607 0.195-0.83-0.344 0.44-0.158 0.53-0.195 0.83"
        />
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Droidian
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/droidian/droidian',
  },
  chat: {
    link: 'https://telegram.dog/DroidianLinux',
    icon: (
      <svg width="24" height="24" viewBox="0 0 16 16">
      <path 
        fill="currentColor"
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
      </svg>
    )
  },
  docsRepositoryBase: 'https://github.com/droidian-releng/docs.droidian.org',
  footer: {
    text: 'Droidian Docs',
  },
  useNextSeoProps(){
    return {
      titleTemplate: '%s - Droidian Docs'
    }
  },
}

export default config
