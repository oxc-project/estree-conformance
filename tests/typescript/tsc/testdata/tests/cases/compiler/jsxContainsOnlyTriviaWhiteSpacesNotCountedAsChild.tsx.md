__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementChildrenAttribute",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 59
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 66,
                      "end": 74
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 76,
                        "end": 78
                      },
                      "start": 74,
                      "end": 78
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 66,
                    "end": 79
                  }
                ],
                "start": 60,
                "end": 83
              },
              "declare": false,
              "start": 25,
              "end": 83
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 18,
            "end": 83
          }
        ],
        "start": 14,
        "end": 85
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 85
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 102
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "className",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 116
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 119,
                    "end": 125
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 128,
                    "end": 137
                  }
                ],
                "start": 119,
                "end": 137
              },
              "start": 117,
              "end": 137
            },
            "accessibility": null,
            "static": false,
            "start": 107,
            "end": 138
          }
        ],
        "start": 103,
        "end": 140
      },
      "declare": false,
      "start": 87,
      "end": 140
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoticeList",
        "optional": false,
        "typeAnnotation": null,
        "start": 151,
        "end": 161
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 174
              },
              "typeArguments": null,
              "start": 169,
              "end": 174
            },
            "start": 167,
            "end": 174
          },
          "start": 162,
          "end": 174
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 187,
              "end": 191
            },
            "start": 180,
            "end": 192
          }
        ],
        "start": 176,
        "end": 194
      },
      "expression": false,
      "start": 142,
      "end": 194
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "NoticeList",
            "start": 197,
            "end": 207
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "className",
                "start": 208,
                "end": 217
              },
              "value": {
                "type": "Literal",
                "value": "my-notice-list",
                "raw": "\"my-notice-list\"",
                "start": 218,
                "end": 234
              },
              "start": 208,
              "end": 234
            }
          ],
          "selfClosing": false,
          "start": 196,
          "end": 235
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n",
            "raw": "\n",
            "start": 235,
            "end": 236
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "NoticeList",
            "start": 238,
            "end": 248
          },
          "start": 236,
          "end": 249
        },
        "start": 196,
        "end": 249
      },
      "directive": null,
      "start": 196,
      "end": 250
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "NoticeList",
            "start": 253,
            "end": 263
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "className",
                "start": 264,
                "end": 273
              },
              "value": {
                "type": "Literal",
                "value": "my-notice-list",
                "raw": "\"my-notice-list\"",
                "start": 274,
                "end": 290
              },
              "start": 264,
              "end": 290
            }
          ],
          "selfClosing": false,
          "start": 252,
          "end": 291
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n\n",
            "raw": "\n\n",
            "start": 291,
            "end": 293
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "NoticeList",
            "start": 295,
            "end": 305
          },
          "start": 293,
          "end": 306
        },
        "start": 252,
        "end": 306
      },
      "directive": null,
      "start": 252,
      "end": 307
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 307
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 18,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 25,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "ElementChildrenAttribute",
    "start": 35,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 66,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 87,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "className",
    "start": 107,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 128,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 142,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "NoticeList",
    "start": 151,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 162,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 169,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 180,
    "end": 186
  },
  {
    "type": "Null",
    "value": "null",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 196,
    "end": 197
  },
  {
    "type": "JSXIdentifier",
    "value": "NoticeList",
    "start": 197,
    "end": 207
  },
  {
    "type": "JSXIdentifier",
    "value": "className",
    "start": 208,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218
  },
  {
    "type": "JSXText",
    "value": "\"my-notice-list\"",
    "start": 218,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 234,
    "end": 235
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 237,
    "end": 238
  },
  {
    "type": "JSXIdentifier",
    "value": "NoticeList",
    "start": 238,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 252,
    "end": 253
  },
  {
    "type": "JSXIdentifier",
    "value": "NoticeList",
    "start": 253,
    "end": 263
  },
  {
    "type": "JSXIdentifier",
    "value": "className",
    "start": 264,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 273,
    "end": 274
  },
  {
    "type": "JSXText",
    "value": "\"my-notice-list\"",
    "start": 274,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 290,
    "end": 291
  },
  {
    "type": "JSXText",
    "value": "\n\n",
    "start": 291,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 294,
    "end": 295
  },
  {
    "type": "JSXIdentifier",
    "value": "NoticeList",
    "start": 295,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  }
]
```
