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
            "start": 52,
            "end": 57
          },
          "start": 52,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 63,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 70
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ResizablePanelProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 101
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
              "start": 106,
              "end": 114
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 117,
                        "end": 122
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReactNode",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 123,
                        "end": 132
                      },
                      "start": 117,
                      "end": 132
                    },
                    "typeArguments": null,
                    "start": 117,
                    "end": 132
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 134,
                        "end": 139
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReactNode",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 149
                      },
                      "start": 134,
                      "end": 149
                    },
                    "typeArguments": null,
                    "start": 134,
                    "end": 149
                  }
                ],
                "start": 116,
                "end": 150
              },
              "start": 114,
              "end": 150
            },
            "accessibility": null,
            "static": false,
            "start": 106,
            "end": 150
          }
        ],
        "start": 102,
        "end": 152
      },
      "declare": false,
      "start": 72,
      "end": 152
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ResizablePanel",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 174
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 183,
          "end": 188
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 189,
          "end": 198
        },
        "optional": false,
        "computed": false,
        "start": 183,
        "end": 198
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ResizablePanelProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 221
            },
            "typeArguments": null,
            "start": 202,
            "end": 221
          },
          {
            "type": "TSAnyKeyword",
            "start": 223,
            "end": 226
          }
        ],
        "start": 198,
        "end": 227
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 228,
        "end": 230
      },
      "abstract": false,
      "declare": false,
      "start": 154,
      "end": 230
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
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 242
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ResizablePanel",
                "start": 246,
                "end": 260
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 245,
              "end": 261
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 261,
                "end": 264
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 265,
                    "end": 268
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 264,
                  "end": 271
                },
                "children": [],
                "closingElement": null,
                "start": 264,
                "end": 271
              },
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 271,
                "end": 274
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 275,
                    "end": 278
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 274,
                  "end": 281
                },
                "children": [],
                "closingElement": null,
                "start": 274,
                "end": 281
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 281,
                "end": 282
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ResizablePanel",
                "start": 284,
                "end": 298
              },
              "start": 282,
              "end": 299
            },
            "start": 245,
            "end": 299
          },
          "definite": false,
          "start": 238,
          "end": 299
        }
      ],
      "declare": false,
      "start": 232,
      "end": 299
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
            "name": "testErr",
            "optional": false,
            "typeAnnotation": null,
            "start": 307,
            "end": 314
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ResizablePanel",
                "start": 318,
                "end": 332
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 317,
              "end": 333
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 333,
                "end": 336
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 337,
                    "end": 340
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 336,
                  "end": 343
                },
                "children": [],
                "closingElement": null,
                "start": 336,
                "end": 343
              },
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 343,
                "end": 346
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 347,
                    "end": 350
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 346,
                  "end": 353
                },
                "children": [],
                "closingElement": null,
                "start": 346,
                "end": 353
              },
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 353,
                "end": 356
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 357,
                    "end": 360
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 356,
                  "end": 363
                },
                "children": [],
                "closingElement": null,
                "start": 356,
                "end": 363
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 363,
                "end": 364
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ResizablePanel",
                "start": 366,
                "end": 380
              },
              "start": 364,
              "end": 381
            },
            "start": 317,
            "end": 381
          },
          "definite": false,
          "start": 307,
          "end": 381
        }
      ],
      "declare": false,
      "start": 301,
      "end": 381
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 381
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 45,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 52,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 58,
    "end": 62
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 63,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 72,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "ResizablePanelProps",
    "start": 82,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 106,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 117,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 123,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 140,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 154,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "ResizablePanel",
    "start": 160,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 175,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 183,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 189,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "ResizablePanelProps",
    "start": 202,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 223,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 232,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 245,
    "end": 246
  },
  {
    "type": "JSXIdentifier",
    "value": "ResizablePanel",
    "start": 246,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 260,
    "end": 261
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 261,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 264,
    "end": 265
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 265,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 270,
    "end": 271
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 271,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 274,
    "end": 275
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 275,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 280,
    "end": 281
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 283,
    "end": 284
  },
  {
    "type": "JSXIdentifier",
    "value": "ResizablePanel",
    "start": 284,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 301,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "testErr",
    "start": 307,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 317,
    "end": 318
  },
  {
    "type": "JSXIdentifier",
    "value": "ResizablePanel",
    "start": 318,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 332,
    "end": 333
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 333,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 336,
    "end": 337
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 337,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 342,
    "end": 343
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 343,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 346,
    "end": 347
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 347,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 352,
    "end": 353
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 353,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 356,
    "end": 357
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 357,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 362,
    "end": 363
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 365,
    "end": 366
  },
  {
    "type": "JSXIdentifier",
    "value": "ResizablePanel",
    "start": 366,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 380,
    "end": 381
  }
]
```
