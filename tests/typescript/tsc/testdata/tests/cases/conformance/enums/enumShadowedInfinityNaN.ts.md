__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Infinity",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 73
              },
              "init": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 76,
                "end": 78
              },
              "definite": false,
              "start": 65,
              "end": 78
            }
          ],
          "declare": false,
          "start": 61,
          "end": 79
        },
        {
          "type": "TSEnumDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "En",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 89
          },
          "body": {
            "type": "TSEnumBody",
            "members": [
              {
                "type": "TSEnumMember",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 97
                },
                "initializer": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Infinity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 108
                },
                "computed": false,
                "start": 96,
                "end": 108
              }
            ],
            "start": 90,
            "end": 112
          },
          "const": false,
          "declare": false,
          "start": 82,
          "end": 112
        }
      ],
      "start": 57,
      "end": 114
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "NaN",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 127
              },
              "init": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 130,
                "end": 132
              },
              "definite": false,
              "start": 124,
              "end": 132
            }
          ],
          "declare": false,
          "start": 120,
          "end": 133
        },
        {
          "type": "TSEnumDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "En",
            "optional": false,
            "typeAnnotation": null,
            "start": 141,
            "end": 143
          },
          "body": {
            "type": "TSEnumBody",
            "members": [
              {
                "type": "TSEnumMember",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 151
                },
                "initializer": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NaN",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 157
                },
                "computed": false,
                "start": 150,
                "end": 157
              }
            ],
            "start": 144,
            "end": 161
          },
          "const": false,
          "declare": false,
          "start": 136,
          "end": 161
        }
      ],
      "start": 116,
      "end": 163
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 163
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 61,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "Infinity",
    "start": 65,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 82,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "En",
    "start": 87,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "Infinity",
    "start": 100,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 120,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 136,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "En",
    "start": 141,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "NaN",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  }
]
```
