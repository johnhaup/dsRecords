import * as React from 'react';
import Svg, { Circle, Ellipse, Path } from 'react-native-svg';

export const RecordInSleeve = ({
  size = 60,
  hideFillColors = false,
}: {
  size?: number;
  hideFillColors?: boolean;
}) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 512 512">
      {hideFillColors ? null : (
        <>
          <Path
            d="M368.226 119.726c-75.262 0-136.274 61.012-136.274 136.274s61.012 136.274 136.274 136.274S504.5 331.262 504.5 256s-61.012-136.274-136.274-136.274z"
            fill="#6f6571"
          />
          <Path
            d="M336.161 123.678C276.4 138.118 231.952 191.803 231.952 256s44.449 117.882 104.21 132.322V123.678z"
            fill="#5d5360"
          />
          <Path
            d="M368.226 199.887c-30.99 0-56.113 25.122-56.113 56.113 0 30.99 25.123 56.113 56.113 56.113S424.339 286.99 424.339 256s-25.123-56.113-56.113-56.113z"
            fill="#ffe07d"
          />
          <Path d="M7.5 103.694h304.613v304.613H7.5z" fill="#ff8086" />
          <Circle cx={159.806} cy={256} fill="#ffe07d" r={120.242} />
          <Circle cx={159.806} cy={256} fill="#fff0af" r={96.194} />
          <Path
            d="M55.597 384.258c-13.282 0-24.048-10.767-24.048-24.048V103.694H7.5v304.613h304.613v-24.048H55.597z"
            fill="#e5646e"
          />
          <Ellipse
            cx={111.71}
            cy={292.59}
            fill="#ff8086"
            rx={24.048}
            ry={20.04}
          />
          <Ellipse
            cx={191.871}
            cy={276.558}
            fill="#ff8086"
            rx={24.048}
            ry={20.04}
          />
          <Path
            d="M336.161 209.988c-14.525 10.141-24.048 26.953-24.048 46.012s9.523 35.871 24.048 46.013z"
            fill="#ffd064"
          />
        </>
      )}

      <Path
        fill={'#010001'}
        d="M368.226 112.226c-16.774 0-33.077 2.829-48.613 8.423v-16.955a7.5 7.5 0 00-7.5-7.5H7.5a7.5 7.5 0 00-7.5 7.5v304.613a7.5 7.5 0 007.5 7.5h304.613a7.5 7.5 0 007.5-7.5v-16.955c15.535 5.594 31.838 8.423 48.613 8.423C447.503 399.774 512 335.277 512 256s-64.497-143.774-143.774-143.774zM15 400.807V111.194h289.613v289.613zm353.226-16.033c-16.869 0-33.197-3.201-48.613-9.5v-78.308c11.678 13.836 29.132 22.646 48.613 22.646 35.077 0 63.613-28.537 63.613-63.613s-28.537-63.613-63.613-63.613c-19.481 0-36.935 8.811-48.613 22.646v-78.308c15.417-6.299 31.745-9.5 48.613-9.5C439.232 127.226 497 184.994 497 256s-57.768 128.774-128.774 128.774zM319.613 256c0-26.805 21.808-48.613 48.613-48.613 26.806 0 48.613 21.808 48.613 48.613s-21.808 48.613-48.613 48.613c-26.806 0-48.613-21.808-48.613-48.613z"
      />
      <Path
        fill={'#010001'}
        d="M368.306 263.5a7.5 7.5 0 000-15h-.081c-4.142 0-7.46 3.358-7.46 7.5s3.399 7.5 7.541 7.5zM191.871 249.017c-17.396 0-31.548 12.354-31.548 27.54s14.152 27.54 31.548 27.54 31.548-12.354 31.548-27.54v-70.258a21.849 21.849 0 00-8.024-16.955 21.842 21.842 0 00-18.198-4.543l-43.578 8.715c-14.695 2.939-25.361 15.949-25.361 30.936v44.703c-4.814-2.6-10.483-4.106-16.549-4.106-17.396 0-31.548 12.354-31.548 27.54s14.152 27.54 31.548 27.54 31.549-12.354 31.549-27.54v-68.137c0-7.861 5.595-14.686 13.303-16.227l43.578-8.715c2.795-.56 4.8.659 5.747 1.435.946.776 2.534 2.503 2.534 5.354v46.824c-4.815-2.6-10.483-4.106-16.549-4.106zm-80.162 56.113c-8.97 0-16.548-5.743-16.548-12.54s7.578-12.54 16.548-12.54 16.549 5.743 16.549 12.54-7.578 12.54-16.549 12.54zm80.162-16.032c-8.97 0-16.548-5.743-16.548-12.54s7.578-12.54 16.548-12.54 16.548 5.743 16.548 12.54-7.578 12.54-16.548 12.54z"
      />
      <Path
        fill={'#010001'}
        d="M250.77 177.196a7.5 7.5 0 00-1.404 10.513c34.125 44.647 29.895 108.278-9.838 148.011s-103.365 43.963-148.012 9.839a7.5 7.5 0 10-9.108 11.917c22.286 17.033 49.562 26.198 77.558 26.198 2.63 0 5.267-.081 7.906-.244 31.036-1.915 60.25-15.092 82.263-37.104s35.189-51.227 37.104-82.263c1.896-30.733-7.321-61.085-25.955-85.464a7.503 7.503 0 00-10.514-1.403zM80.086 176.279c39.733-39.734 103.365-43.963 148.011-9.839a7.5 7.5 0 109.108-11.917c-24.378-18.633-54.722-27.854-85.464-25.955-31.036 1.915-60.25 15.092-82.262 37.104-22.012 22.013-35.189 51.228-37.104 82.263-1.896 30.733 7.321 61.085 25.955 85.464a7.491 7.491 0 005.964 2.946 7.5 7.5 0 005.954-12.055c-34.125-44.646-29.895-108.277 9.838-148.011zM368.226 152.307c-8.772 0-17.491 1.099-25.914 3.266a7.5 7.5 0 003.738 14.527 89.052 89.052 0 0122.175-2.793c48.906 0 88.694 39.788 88.694 88.694s-39.788 88.694-88.694 88.694a89.02 89.02 0 01-22.179-2.794 7.498 7.498 0 00-9.133 5.394 7.5 7.5 0 005.394 9.133 104.05 104.05 0 0025.918 3.268c57.177 0 103.694-46.517 103.694-103.694s-46.517-103.695-103.693-103.695z"
      />
    </Svg>
  );
};
