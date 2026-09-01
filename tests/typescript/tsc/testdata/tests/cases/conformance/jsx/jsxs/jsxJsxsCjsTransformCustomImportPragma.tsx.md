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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 81
          },
          "init": {
            "type": "JSXFragment",
            "openingFragment": {
              "type": "JSXOpeningFragment",
              "start": 84,
              "end": 86
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 86,
                "end": 89
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "p",
                    "start": 90,
                    "end": 91
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 89,
                  "end": 92
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "p",
                    "start": 94,
                    "end": 95
                  },
                  "start": 92,
                  "end": 96
                },
                "start": 89,
                "end": 96
              },
              {
                "type": "JSXText",
                "value": "\n  text\n  ",
                "raw": "\n  text\n  ",
                "start": 96,
                "end": 106
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 107,
                    "end": 110
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "className",
                        "start": 111,
                        "end": 120
                      },
                      "value": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 121,
                        "end": 126
                      },
                      "start": 111,
                      "end": 126
                    }
                  ],
                  "selfClosing": false,
                  "start": 106,
                  "end": 127
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 129,
                    "end": 132
                  },
                  "start": 127,
                  "end": 133
                },
                "start": 106,
                "end": 133
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 133,
                "end": 134
              }
            ],
            "closingFragment": {
              "type": "JSXClosingFragment",
              "start": 134,
              "end": 137
            },
            "start": 84,
            "end": 137
          },
          "definite": false,
          "start": 80,
          "end": 137
        }
      ],
      "declare": false,
      "start": 74,
      "end": 137
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 139,
      "end": 149
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 74,
  "end": 149
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
    "value": "a",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 85,
    "end": 86
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 86,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 89,
    "end": 90
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 93,
    "end": 94
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 95,
    "end": 96
  },
  {
    "type": "JSXText",
    "value": "\n  text\n  ",
    "start": 96,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 106,
    "end": 107
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 107,
    "end": 110
  },
  {
    "type": "JSXIdentifier",
    "value": "className",
    "start": 111,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "JSXText",
    "value": "\"foo\"",
    "start": 121,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 128,
    "end": 129
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 129,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 132,
    "end": 133
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 99
          },
          "init": {
            "type": "JSXFragment",
            "openingFragment": {
              "type": "JSXOpeningFragment",
              "start": 102,
              "end": 104
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 104,
                "end": 107
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "p",
                    "start": 108,
                    "end": 109
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 107,
                  "end": 110
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "p",
                    "start": 112,
                    "end": 113
                  },
                  "start": 110,
                  "end": 114
                },
                "start": 107,
                "end": 114
              },
              {
                "type": "JSXText",
                "value": "\n  text\n  ",
                "raw": "\n  text\n  ",
                "start": 114,
                "end": 124
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 125,
                    "end": 128
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "className",
                        "start": 129,
                        "end": 138
                      },
                      "value": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 139,
                        "end": 144
                      },
                      "start": 129,
                      "end": 144
                    }
                  ],
                  "selfClosing": false,
                  "start": 124,
                  "end": 145
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 147,
                    "end": 150
                  },
                  "start": 145,
                  "end": 151
                },
                "start": 124,
                "end": 151
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 151,
                "end": 152
              }
            ],
            "closingFragment": {
              "type": "JSXClosingFragment",
              "start": 152,
              "end": 155
            },
            "start": 102,
            "end": 155
          },
          "definite": false,
          "start": 98,
          "end": 155
        }
      ],
      "declare": false,
      "start": 92,
      "end": 155
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 157,
      "end": 167
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 73,
  "end": 167
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
    "value": "a",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 103,
    "end": 104
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 104,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 107,
    "end": 108
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 111,
    "end": 112
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 113,
    "end": 114
  },
  {
    "type": "JSXText",
    "value": "\n  text\n  ",
    "start": 114,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 124,
    "end": 125
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 125,
    "end": 128
  },
  {
    "type": "JSXIdentifier",
    "value": "className",
    "start": 129,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "JSXText",
    "value": "\"foo\"",
    "start": 139,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 146,
    "end": 147
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 147,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 150,
    "end": 151
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 157,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  }
]
```
