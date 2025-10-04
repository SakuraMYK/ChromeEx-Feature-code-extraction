//    番剧剧集 搜索窗口 功能清单
//    代码将直接粘贴运行在浏览器的控制台终端中
//  每集元素示例： <a href="show-772bf3e5bdba39f91eb3041e730bde1d33ace76e.html" target="_blank">
//          六四位元字幕组★游乐场少女的异文化交流 <span class="keyword">Game</span> <span class="keyword">Center</span> <span class="keyword">Shoujo</span> <span class="keyword">to</span> <span class="keyword">Ibunka</span> <span class="keyword">Kouryuu</span>★12_完★1920x1080★AVC AAC MP4★繁体中文</a>
//  1. 搜索当前页面所有的文本节点，以及保存对应的特征码（"show-"开头的，".html"结尾的，去掉这个开头和结尾的才是我要的特征码）
//  2. 检索的结果，按照不同的字幕组进行划分区块，字体不同的，分辨率不同的，也要划分区块，每个区块要鲜明的隔开
//  3. 检索到的每集，按行为一个单选框，供用户选择
//  4. 用户选择后，点击 复制 按钮，将选中的所有集对应的特征码，复制到剪贴板（换行的）
//  5. 当点击复制按钮后，按钮状态变为已复制，再次点击则触发 +1 上移减淡动画，再点击则再动画播放一次
//  6. 当点击关闭按钮后，关闭当前搜索窗口
//  发表时间	类别	标题	大小	UP主 / 代号
//  今天 00:40	动画	[黒ネズミたち] 游乐场少女的异文化交流 / Game Center Shoujo to Ibunka Kouryuu - 12 (ABEMA 1920x1080 AVC AAC MP4)	712.2MB	Kirara Fantasia
//  2025/09/30	动画	[LoliHouse] 与游戏中心的少女异文化交流的故事 / Game Center Shoujo to Ibunka Kouryuu - 11 [WebRip 1080p HEVC-10bit AAC][简繁内封字幕]	389.8MB	LoliHouse
//  2025/09/29	动画	[三明治摆烂组&Pre-S] 与游戏中心的少女异文化交流的故事 / Game Center Shoujo to Ibunka Kouryuu - 12 - [繁日内嵌][H264 8bit 1080P](检索：游乐场少女的异文化交流)	402.5MB	三明治摆烂组
//  2025/09/29	动画	[三明治摆烂组&Pre-S] 与游戏中心的少女异文化交流的故事 / Game Center Shoujo to Ibunka Kouryuu - 12 - [简日内嵌][H264 8bit 1080P](检索：游乐场少女的异文化交流)	402.7MB	三明治摆烂组
//  2025/09/29	动画	[三明治摆烂组&Pre-S] 与游戏中心的少女异文化交流的故事 / Game Center Shoujo to Ibunka Kouryuu - 12 - [简繁日内封][H265 10bit 1080P](检索：游乐场少女的异文化交流)	377.1MB	三明治摆烂组
//  2025/09/29	动画	六四位元字幕组★游乐场少女的异文化交流 Game Center Shoujo to Ibunka Kouryuu★12_完★1920x1080★AVC AAC MP4★繁体中文	288.4MB	Kotoriii
//  2025/09/28	动画	[黒ネズミたち] 游乐场少女的异文化交流 / Game Center Shoujo to Ibunka Kouryuu - 12 (CR 1920x1080 AVC AAC MKV)	650.5MB	Kirara Fantasia
//  2025/09/27	动画	[黒ネズミたち] 游乐场少女的异文化交流 / Game Center Shoujo to Ibunka Kouryuu - 11 (ABEMA 1920x1080 AVC AAC MP4)	712.2MB	Kirara Fantasia
//  2025/09/22	动画	[三明治摆烂组&Pre-S] 与游戏中心的少女异文化交流的故事 / Game Center Shoujo to Ibunka Kouryuu - 11 - [繁日内嵌][H264 8bit 1080P](检索：游乐场少女的异文化交流)	437.7MB	三明治摆烂组
//  2025/09/22	动画	[三明治摆烂组&Pre-S] 与游戏中心的少女异文化交流的故事 / Game Center Shoujo to Ibunka Kouryuu - 11 - [简日内嵌][H264 8bit 1080P](检索：游乐场少女的异文化交流)	437.8MB	三明治摆烂组
//  2025/09/22	动画	[三明治摆烂组&Pre-S] 与游戏中心的少女异文化交流的故事 / Game Center Shoujo to Ibunka Kouryuu - 11 - [简繁日内封][H265 10bit 1080P](检索：游乐场少女的异文化交流)	469.3MB	三明治摆烂组
//  2025/09/22	动画	六四位元字幕組★遊樂場少女的異文化交流 Game Center Shoujo to Ibunka Kouryuu★11★1920x1080★AVC AAC MP4★繁體中文	312MB	六四位元字幕組
//  2025/09/21	动画	[黒ネズミたち] 游乐场少女的异文化交流 / Game Center Shoujo to Ibunka Kouryuu - 11 (CR 1920x1080 AVC AAC MKV)	740MB	Kirara Fantasia
//  2025/09/21	动画	[LoliHouse] 与游戏中心的少女异文化交流的故事 / Game Center Shoujo to Ibunka Kouryuu - 10 [WebRip 1080p HEVC-10bit AAC][简繁内封字幕]	380.5MB	LoliHouse
//  2025/09/21	动画	[LoliHouse] 与游戏中心的少女异文化交流的故事 / Game Center Shoujo to Ibunka Kouryuu - 09 [WebRip 1080p HEVC-10bit AAC][简繁内封字幕]	335.7MB	LoliHouse
//  2025/09/21	动画	[北宇治字幕组] 与游戏中心的少女异文化交流的故事 / Game Center Shoujo to Ibunka Kouryuu [10][WebRip][HEVC_AAC][繁日内嵌]	290.4MB	北宇治字幕组

;(function () {
  // 查询所有 a[href]，匹配 show-XXXX.html，并提取 code（去掉 show- 与 .html）
  function findShowAnchors () {
    const anchors = Array.from(document.querySelectorAll('a[href]'))
    const re = /(show-[^"'>]+\.html)/i
    const results = []
    for (const a of anchors) {
      const hrefAttr = a.getAttribute('href') || ''
      const m = hrefAttr.match(re)
      if (m) {
        const matched = m[1] // show-xxxx.html
        const code = matched.replace(/^show-/i, '').replace(/\.html$/i, '')
        const titleText = (a.innerText || a.textContent || '').trim()
        results.push({ matched, code, titleText, element: a, fullHref: a.href })
      }
    }
    return results
  }

  function normalizeResolution (raw) {
    if (!raw) return '未知'
    const s = String(raw).toLowerCase()
    if (/\b(2160|4k|3840x2160)\b/.test(s)) return '2160P'
    if (/\b(1440|2560x1440|2k)\b/.test(s)) return '1440P'
    if (/\b(1080|1920x1080|1080p)\b/.test(s)) return '1080P'
    if (/\b(720|1280x720|720p)\b/.test(s)) return '720P'
    if (/\b(480|480p)\b/.test(s)) return '480P'
    return raw.toString().toUpperCase()
  }
  // 解析分组（字幕组）等元信息（仅用于分组，不在列表中显示右侧 meta）
  function parseMeta (title) {
    const meta = {
      group: '未知',
      resolution: '未知',
      subs: '未知',
      episode: null
    }
    const g1 = title.match(/^\s*\[([^\]]+)\]/)
    if (g1) meta.group = g1[1]
    else {
      const g2 = title.match(
        /^\s*([^\/\-\[\★]+?(?:字幕组|字幕|组|社|字幕組|字幕組)?)(?=(?:\s|\/|\[|\(|★))/
      )
      if (g2) meta.group = g2[1].trim()
    }

    // 原先直接取到的值，改为通过 normalizeResolution 统一格式
    const r = title.match(/(\d{3,4}x\d{3,4}|\d{3,4}p)/i)
    if (r) meta.resolution = normalizeResolution(r[1])

    if (/[简繁繁體繁体]/.test(title)) meta.subs = '繁/简'
    if (/内嵌|内封|内封字幕|内嵌字幕/.test(title))
      meta.subs =
        meta.subs === '未知' ? '内嵌/内封' : meta.subs + ' + 内嵌/内封'

    const ep =
      title.match(
        /(?:\b|_|\-|★|\[)(?:EP|E|Episode)?\s*([0-9]{1,3})(?:\b|_|\-|★|\])/i
      ) || title.match(/(?:-|_|\s)第?\s*([0-9]{1,3})\s*话/)
    if (ep) meta.episode = Number(ep[1])
    return meta
  }

  function summarize (items) {
    const byGroup = {}
    const byRes = {}
    const bySubs = {}
    const eps = items.map(i => i.meta.episode).filter(n => Number.isFinite(n))
    for (const it of items) {
      byGroup[it.meta.group] = (byGroup[it.meta.group] || 0) + 1
      byRes[it.meta.resolution] = (byRes[it.meta.resolution] || 0) + 1
      bySubs[it.meta.subs] = (bySubs[it.meta.subs] || 0) + 1
    }
    return {
      total: items.length,
      groups: byGroup,
      resolutions: byRes,
      subs: bySubs,
      epRange: eps.length ? `${Math.min(...eps)} - ${Math.max(...eps)}` : '未知'
    }
  }

  function groupBy (items, keyFn) {
    return items.reduce((acc, it) => {
      const k = keyFn(it)
      ;(acc[k] = acc[k] || []).push(it)
      return acc
    }, {})
  }

  function createModal (items, summary) {
    const old = document.getElementById('jojo-search-modal')
    if (old) old.remove()

    const style = document.createElement('style')
    style.id = 'jojo-search-style'
    style.textContent = `
#jojo-search-modal { position: fixed; right: 18px; top: 18px; width: 700px; max-height: 88vh; overflow: auto; background: #07111b; color: #e6eef8; border-radius: 10px; box-shadow: 0 12px 48px rgba(0,0,0,0.7); z-index: 999999; font-family:Segoe UI,Roboto,Helvetica,Arial; padding: 14px; }
#jojo-search-modal h3{ margin:2px 0 8px 0; font-size:15px; }
#jojo-search-modal .summary{ font-size:12px; opacity:.9; margin-bottom:10px; }
.group-section{ border:2px solid rgba(123, 255, 90, 0.90); padding:10px; margin:12px 0; border-radius:8px; background: linear-gradient(180deg, rgba(32,60,100,0.08), rgba(39, 100, 161, 0.58)); }
.group-header{ display:flex; align-items:center; gap:12px; }
.gtitle{ font-weight:700; color:#dbefff; font-size:13px; }
.group-meta{ font-size:12px; color:#9fb6d6; margin-left:8px; white-space:nowrap; }
.group-controls{ margin-left:auto; display:flex; gap:8px; align-items:center; }
.group-list{ margin-top:8px; max-height:260px; overflow:auto; padding-left:6px; }
.jojo-row{ display:flex; align-items:center; gap:10px; padding:6px 4px; border-radius:4px; background: transparent !important; }
.jojo-row:hover{ background: rgba(255, 255, 255, 1.00) !important; }
.jojo-checkbox{ width:16px; height:16px; cursor:pointer; }
.jojo-title{ flex:1; font-size:13px; line-height:1.3; color:#dceefe; word-break:break-word; cursor:pointer; user-select:none; }
#jojo-actions{ display:flex; gap:8px; margin-top:8px; align-items:center; }
.jojo-btn{ padding:6px 10px; border-radius:6px; background:#1f6feb; color:#fff; border:none; cursor:pointer; font-size:13px; }
.jojo-btn:active{ transform:translateY(1px); }
.jojo-close{ background:#404a57; }
.jojo-copied{ background:#2bb673 !important; }
.floating-plus{ position: absolute; pointer-events:none; color:#2bb673; font-weight:700; transform: translateY(0); opacity:1; transition: transform .9s cubic-bezier(.2,.9,.2,1), opacity .9s; }
.collapsed .group-list{ display:none; }
.group-btn{ padding:6px 10px; border-radius:6px; background:#2b6bff; color:#fff; border:none; cursor:pointer; font-size:12px; }
.group-btn.alt{ background:#666; }
`

    document.head.appendChild(style)

    const modal = document.createElement('div')
    modal.id = 'jojo-search-modal'
    modal.innerHTML = `
      <h3>番剧集 搜索窗口 — 结果 ${summary.total} 条（${summary.epRange}）</h3>
      <div id="jojo-groups"></div>
      <div id="jojo-actions">
        <button id="jojo-copy" class="jojo-btn">复制 特征码</button>
        <button id="jojo-close" class="jojo-btn jojo-close">关闭</button>
        <button id="jojo-select-all" class="jojo-btn" style="background:#2b6bff">全选</button>
        <button id="jojo-clear" class="jojo-btn" style="background:#777">清除</button>
        <span id="jojo-notice" style="margin-left:auto;font-size:12px;align-self:center;opacity:.95"></span>
      </div>
    `
    document.body.appendChild(modal)

    const groupsContainer = modal.querySelector('#jojo-groups')
    const grouped = groupBy(items, it => it.meta.group || '未知')

    Object.keys(grouped)
      .sort()
      .forEach(groupName => {
        const grpItems = grouped[groupName]
        const resCounts = {}
        const subsCounts = {}
        grpItems.forEach(i => {
          resCounts[i.meta.resolution] = (resCounts[i.meta.resolution] || 0) + 1
          subsCounts[i.meta.subs] = (subsCounts[i.meta.subs] || 0) + 1
        })

        const section = document.createElement('div')
        section.className = 'group-section'
        section.innerHTML = `
        <div class="group-header">
          <div class="gtitle">${groupName} （${grpItems.length}）</div>
          <div class="group-meta">${Object.entries(resCounts)
            .map(([k, v]) => `分辨率：${k}`)
            .join(' / ')} &nbsp; ${Object.entries(subsCounts)
          .map(([k, v]) => `字幕：${k}`)
          .join(' / ')}</div>
          <div class="group-controls">
            <button class="group-btn group-toggle">全选</button>
            <button class="group-btn alt group-collapse">折叠</button>
          </div>
        </div>
        <div class="group-list" role="list"></div>
      `
        groupsContainer.appendChild(section)
        const list = section.querySelector('.group-list')

        grpItems.sort((a, b) => {
          const A = a.meta.episode === null ? 9999 : a.meta.episode
          const B = b.meta.episode === null ? 9999 : b.meta.episode
          return A - B
        })

        grpItems.forEach((it, idx) => {
          const row = document.createElement('div')
          row.className = 'jojo-row'
          // data-code 保存去掉 show- 和 .html 的特征码
          row.innerHTML = `
          <input type="checkbox" class="jojo-checkbox" data-code="${
            it.code
          }" data-href="${it.matched}" id="jojo-cb-${groupName}-${idx}">
          <div class="jojo-title" data-cbid="jojo-cb-${groupName}-${idx}">${
            it.titleText || it.matched
          }</div>
        `
          list.appendChild(row)

          const titleDiv = row.querySelector('.jojo-title')
          const cb = row.querySelector('.jojo-checkbox')
          titleDiv.addEventListener('click', e => {
            e.preventDefault()
            e.stopPropagation()
            cb.checked = !cb.checked
          })
        })

        // 组级单按钮：根据当前是否存在未选中项切换全选/清除
        const toggleBtn = section.querySelector('.group-toggle')
        toggleBtn.addEventListener('click', () => {
          const cbs = Array.from(section.querySelectorAll('.jojo-checkbox'))
          const anyUnchecked = cbs.some(cb => !cb.checked)
          if (anyUnchecked) {
            cbs.forEach(cb => (cb.checked = true))
            toggleBtn.textContent = '清除'
          } else {
            cbs.forEach(cb => (cb.checked = false))
            toggleBtn.textContent = '全选'
          }
        })

        const collapseBtn = section.querySelector('.group-collapse')
        collapseBtn.addEventListener('click', () => {
          section.classList.toggle('collapsed')
          collapseBtn.textContent = section.classList.contains('collapsed')
            ? '展开'
            : '折叠'
        })
      })

    // 全局按键
    modal.querySelector('#jojo-select-all').addEventListener('click', () => {
      modal
        .querySelectorAll('.jojo-checkbox')
        .forEach(cb => (cb.checked = true))
      modal
        .querySelectorAll('.group-toggle')
        .forEach(b => (b.textContent = '清除'))
    })
    modal.querySelector('#jojo-clear').addEventListener('click', () => {
      modal
        .querySelectorAll('.jojo-checkbox')
        .forEach(cb => (cb.checked = false))
      modal
        .querySelectorAll('.group-toggle')
        .forEach(b => (b.textContent = '全选'))
    })

    // 复制：复制每个被选中项的 data-code（每行一个，换行分隔）
    const copyBtn = modal.querySelector('#jojo-copy')
    const notice = modal.querySelector('#jojo-notice')
    copyBtn.addEventListener('click', async e => {
      const checkedCodes = Array.from(
        modal.querySelectorAll('.jojo-checkbox:checked')
      )
        .map(cb => cb.getAttribute('data-code'))
        .filter(Boolean)
      if (checkedCodes.length === 0) {
        notice.textContent = '未选择任何项'
        setTimeout(() => (notice.textContent = ''), 1500)
        return
      }
      const text = checkedCodes.join('\n')
      try {
        await navigator.clipboard.writeText(text)
        copyBtn.classList.add('jojo-copied')
        copyBtn.textContent = '已复制'
        notice.textContent = `已复制 ${checkedCodes.length} 条`
        setTimeout(() => (notice.textContent = ''), 1800)
      } catch (err) {
        const ta = document.createElement('textarea')
        ta.value = text
        document.body.appendChild(ta)
        ta.select()
        try {
          document.execCommand('copy')
          copyBtn.classList.add('jojo-copied')
          copyBtn.textContent = '已复制'
          notice.textContent = '已复制 (fallback)'
          setTimeout(() => (notice.textContent = ''), 1800)
        } finally {
          ta.remove()
        }
      }

      // +1 上移淡出动画（每次点击都会播放）
      const rect = copyBtn.getBoundingClientRect()
      const plus = document.createElement('div')
      plus.className = 'floating-plus'
      plus.style.left = rect.left + rect.width / 2 + 'px'
      plus.style.top = rect.top - 8 + 'px'
      plus.style.fontSize = '16px'
      plus.textContent = '+1'
      document.body.appendChild(plus)
      requestAnimationFrame(() => {
        plus.style.transform = 'translateY(-28px)'
        plus.style.opacity = '0'
      })
      setTimeout(() => plus.remove(), 900)
    })

    modal.querySelector('#jojo-close').addEventListener('click', () => {
      modal.remove()
      const s = document.getElementById('jojo-search-style')
      if (s) s.remove()
    })

    return modal
  }

  // 主流程
  const anchors = findShowAnchors()
  if (!anchors.length) {
    alert('未在当前页面找到特征码')
    return
  }
  const items = anchors.map(a => ({
    matched: a.matched,
    code: a.code,
    titleText: a.titleText,
    element: a.element,
    meta: parseMeta(a.titleText)
  }))
  const summary = summarize(items)
  createModal(items, summary)
})()
