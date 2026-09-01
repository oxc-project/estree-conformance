__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 56
          },
          "start": 51,
          "end": 56
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 73
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 73
          },
          "importKind": "value",
          "start": 60,
          "end": 73
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 81,
        "end": 88
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 89
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
            "name": "Elem",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 111,
                  "end": 124
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "someKey",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 127,
                            "end": 134
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 136,
                              "end": 142
                            },
                            "start": 134,
                            "end": 142
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 127,
                          "end": 142
                        }
                      ],
                      "start": 125,
                      "end": 144
                    }
                  ],
                  "start": 124,
                  "end": 145
                },
                "start": 111,
                "end": 145
              },
              "start": 109,
              "end": 145
            },
            "start": 105,
            "end": 145
          },
          "init": null,
          "definite": false,
          "start": 105,
          "end": 145
        }
      ],
      "declare": true,
      "start": 91,
      "end": 146
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
            "name": "bad",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 157
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Elem",
                "start": 161,
                "end": 165
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 160,
              "end": 168
            },
            "children": [],
            "closingElement": null,
            "start": 160,
            "end": 168
          },
          "definite": false,
          "start": 154,
          "end": 168
        }
      ],
      "declare": false,
      "start": 148,
      "end": 169
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
            "name": "good",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 181
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Elem",
                "start": 185,
                "end": 189
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "someKey",
                    "start": 190,
                    "end": 197
                  },
                  "value": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 198,
                    "end": 202
                  },
                  "start": 190,
                  "end": 202
                }
              ],
              "selfClosing": true,
              "start": 184,
              "end": 205
            },
            "children": [],
            "closingElement": null,
            "start": 184,
            "end": 205
          },
          "definite": false,
          "start": 177,
          "end": 205
        }
      ],
      "declare": false,
      "start": 171,
      "end": 206
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
            "name": "Elem2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 229,
                  "end": 242
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "opt",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 245,
                            "end": 248
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 251,
                              "end": 257
                            },
                            "start": 249,
                            "end": 257
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 245,
                          "end": 257
                        }
                      ],
                      "start": 243,
                      "end": 259
                    }
                  ],
                  "start": 242,
                  "end": 260
                },
                "start": 229,
                "end": 260
              },
              "start": 227,
              "end": 260
            },
            "start": 222,
            "end": 260
          },
          "init": null,
          "definite": false,
          "start": 222,
          "end": 260
        }
      ],
      "declare": true,
      "start": 208,
      "end": 261
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
            "name": "alsoOk",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 274
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Elem2",
                "start": 278,
                "end": 283
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 277,
              "end": 284
            },
            "children": [
              {
                "type": "JSXText",
                "value": "text",
                "raw": "text",
                "start": 284,
                "end": 288
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Elem2",
                "start": 290,
                "end": 295
              },
              "start": 288,
              "end": 296
            },
            "start": 277,
            "end": 296
          },
          "definite": false,
          "start": 268,
          "end": 296
        }
      ],
      "declare": false,
      "start": 262,
      "end": 297
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 297
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 44,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 51,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 60,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 76,
    "end": 80
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 81,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 91,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 99,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "Elem",
    "start": 105,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 111,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "someKey",
    "start": 127,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 136,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
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
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 148,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "bad",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 160,
    "end": 161
  },
  {
    "type": "JSXIdentifier",
    "value": "Elem",
    "start": 161,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 171,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "good",
    "start": 177,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 184,
    "end": 185
  },
  {
    "type": "JSXIdentifier",
    "value": "Elem",
    "start": 185,
    "end": 189
  },
  {
    "type": "JSXIdentifier",
    "value": "someKey",
    "start": 190,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198
  },
  {
    "type": "JSXText",
    "value": "\"ok\"",
    "start": 198,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 208,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 216,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "Elem2",
    "start": 222,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 229,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 245,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 251,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 262,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "alsoOk",
    "start": 268,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 277,
    "end": 278
  },
  {
    "type": "JSXIdentifier",
    "value": "Elem2",
    "start": 278,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 283,
    "end": 284
  },
  {
    "type": "JSXText",
    "value": "text",
    "start": 284,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 289,
    "end": 290
  },
  {
    "type": "JSXIdentifier",
    "value": "Elem2",
    "start": 290,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  }
]
```
