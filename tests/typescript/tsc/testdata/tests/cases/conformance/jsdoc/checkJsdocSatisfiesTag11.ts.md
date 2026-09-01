__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 168
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 174
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 176,
                  "end": 177
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 173,
                "end": 177
              }
            ],
            "start": 171,
            "end": 179
          },
          "definite": false,
          "start": 166,
          "end": 179
        }
      ],
      "declare": false,
      "start": 160,
      "end": 180
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 221
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 252,
            "end": 253
          },
          "definite": false,
          "start": 219,
          "end": 254
        }
      ],
      "declare": false,
      "start": 213,
      "end": 255
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 160,
  "end": 255
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 160,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 166,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 213,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 219,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  }
]
```
