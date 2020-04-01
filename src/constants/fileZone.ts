
type GroupName =
  | 'INLINE_STYLE_BUTTONS'
  | 'BLOCK_TYPE_BUTTONS'
  | 'LINK_BUTTONS'
  | 'BLOCK_TYPE_DROPDOWN'
  | 'HISTORY_BUTTONS'
  | 'IMAGE_BUTTON';

interface IStyleConfig {
  label: string;
  style: string;
  className?: string;
}

type StyleConfigList = IStyleConfig[];

interface IFileZone {
  EDITOR_CONFIG: {
    display: GroupName[],
    INLINE_STYLE_BUTTONS: StyleConfigList;
    BLOCK_TYPE_DROPDOWN: StyleConfigList;
    BLOCK_TYPE_BUTTONS: StyleConfigList;
  }
  FORMAT_HTML: string,
  FORMAT_MARKDOWN: string,
  MOCK_TEXT: string
}
const fileZone: IFileZone = {
  EDITOR_CONFIG: {
    display: ['INLINE_STYLE_BUTTONS'],
    BLOCK_TYPE_BUTTONS: [],
    BLOCK_TYPE_DROPDOWN: [],
    INLINE_STYLE_BUTTONS: [
      { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
      { label: 'Italic', style: 'ITALIC' },
      { label: 'Underline', style: 'UNDERLINE' }
    ],

  },
  FORMAT_HTML: 'html',
  FORMAT_MARKDOWN: 'markdown',
  MOCK_TEXT: 'A year ago I was in the audience at a gathering of designers in San Francisco. There were four designers on stage, and two of them worked for me. I was there to support them. The topic of design responsibility came up, possibly brought up by one of my designers, I honestly don’t remember the details. What I do remember is that at some point in the discussion I raised my hand and suggested, to this group of designers, that modern design problems were very complex. And we ought to need a license to solve them.'
};

export default fileZone;
