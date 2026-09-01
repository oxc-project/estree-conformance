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
            "name": "props",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 85
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
                  "name": "answer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 96
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 98,
                  "end": 100
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 90,
                "end": 100
              }
            ],
            "start": 88,
            "end": 102
          },
          "definite": false,
          "start": 80,
          "end": 102
        }
      ],
      "declare": false,
      "start": 74,
      "end": 102
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 110
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 114,
                "end": 117
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 118,
                    "end": 121
                  },
                  "value": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 122,
                    "end": 127
                  },
                  "start": 118,
                  "end": 127
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 137
                  },
                  "start": 128,
                  "end": 138
                }
              ],
              "selfClosing": false,
              "start": 113,
              "end": 139
            },
            "children": [
              {
                "type": "JSXText",
                "value": "text",
                "raw": "text",
                "start": 139,
                "end": 143
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 145,
                "end": 148
              },
              "start": 143,
              "end": 149
            },
            "start": 113,
            "end": 149
          },
          "definite": false,
          "start": 109,
          "end": 149
        }
      ],
      "declare": false,
      "start": 103,
      "end": 150
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 158
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 162,
                "end": 165
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 170,
                    "end": 175
                  },
                  "start": 166,
                  "end": 176
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 177,
                    "end": 180
                  },
                  "value": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 181,
                    "end": 186
                  },
                  "start": 177,
                  "end": 186
                }
              ],
              "selfClosing": false,
              "start": 161,
              "end": 187
            },
            "children": [
              {
                "type": "JSXText",
                "value": "text",
                "raw": "text",
                "start": 187,
                "end": 191
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 193,
                "end": 196
              },
              "start": 191,
              "end": 197
            },
            "start": 161,
            "end": 197
          },
          "definite": false,
          "start": 157,
          "end": 197
        }
      ],
      "declare": false,
      "start": 151,
      "end": 198
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 200,
      "end": 210
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 74,
  "end": 211
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 74,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "answer",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 98,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 103,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 113,
    "end": 114
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 114,
    "end": 117
  },
  {
    "type": "JSXIdentifier",
    "value": "key",
    "start": 118,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "JSXText",
    "value": "\"foo\"",
    "start": 122,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 129,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 132,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 138,
    "end": 139
  },
  {
    "type": "JSXText",
    "value": "text",
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 144,
    "end": 145
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 151,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 161,
    "end": 162
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 162,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 167,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 170,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "JSXIdentifier",
    "value": "key",
    "start": 177,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181
  },
  {
    "type": "JSXText",
    "value": "\"bar\"",
    "start": 181,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 186,
    "end": 187
  },
  {
    "type": "JSXText",
    "value": "text",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 192,
    "end": 193
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 193,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./preact",
        "raw": "\"./preact\"",
        "start": 80,
        "end": 90
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 73,
      "end": 91
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
            "name": "props2",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 104
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
                  "name": "answer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 115
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 117,
                  "end": 119
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 109,
                "end": 119
              }
            ],
            "start": 107,
            "end": 121
          },
          "definite": false,
          "start": 98,
          "end": 121
        }
      ],
      "declare": false,
      "start": 92,
      "end": 121
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 130
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 134,
                "end": 137
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 138,
                    "end": 141
                  },
                  "value": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 142,
                    "end": 147
                  },
                  "start": 138,
                  "end": 147
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 152,
                    "end": 158
                  },
                  "start": 148,
                  "end": 159
                }
              ],
              "selfClosing": false,
              "start": 133,
              "end": 160
            },
            "children": [
              {
                "type": "JSXText",
                "value": "text",
                "raw": "text",
                "start": 160,
                "end": 164
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 166,
                "end": 169
              },
              "start": 164,
              "end": 170
            },
            "start": 133,
            "end": 170
          },
          "definite": false,
          "start": 128,
          "end": 170
        }
      ],
      "declare": false,
      "start": 122,
      "end": 171
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 180
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 184,
                "end": 187
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 192,
                    "end": 198
                  },
                  "start": 188,
                  "end": 199
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 200,
                    "end": 203
                  },
                  "value": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 204,
                    "end": 209
                  },
                  "start": 200,
                  "end": 209
                }
              ],
              "selfClosing": false,
              "start": 183,
              "end": 210
            },
            "children": [
              {
                "type": "JSXText",
                "value": "text",
                "raw": "text",
                "start": 210,
                "end": 214
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 216,
                "end": 219
              },
              "start": 214,
              "end": 220
            },
            "start": 183,
            "end": 220
          },
          "definite": false,
          "start": 178,
          "end": 220
        }
      ],
      "declare": false,
      "start": 172,
      "end": 221
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 223,
      "end": 233
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 73,
  "end": 233
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 73,
    "end": 79
  },
  {
    "type": "String",
    "value": "\"./preact\"",
    "start": 80,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 92,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "props2",
    "start": 98,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "answer",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 117,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 122,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 128,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 133,
    "end": 134
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 134,
    "end": 137
  },
  {
    "type": "JSXIdentifier",
    "value": "key",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 141,
    "end": 142
  },
  {
    "type": "JSXText",
    "value": "\"foo\"",
    "start": 142,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 149,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "props2",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 159,
    "end": 160
  },
  {
    "type": "JSXText",
    "value": "text",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 165,
    "end": 166
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 166,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 172,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 178,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 183,
    "end": 184
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 184,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 189,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "props2",
    "start": 192,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "JSXIdentifier",
    "value": "key",
    "start": 200,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 203,
    "end": 204
  },
  {
    "type": "JSXText",
    "value": "\"bar\"",
    "start": 204,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 209,
    "end": 210
  },
  {
    "type": "JSXText",
    "value": "text",
    "start": 210,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 215,
    "end": 216
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 216,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 223,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  }
]
```
