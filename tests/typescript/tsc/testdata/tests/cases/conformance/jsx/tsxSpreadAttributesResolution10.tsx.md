__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 55
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 66,
          "end": 73
        },
        "start": 58,
        "end": 74
      },
      "importKind": "value",
      "start": 43,
      "end": 75
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OptionProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 97
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 105
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 108,
                  "end": 109
                },
                "start": 108,
                "end": 109
              },
              "start": 106,
              "end": 109
            },
            "accessibility": null,
            "static": false,
            "start": 104,
            "end": 109
          }
        ],
        "start": 98,
        "end": 111
      },
      "declare": false,
      "start": 77,
      "end": 111
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Opt",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 122
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
          "start": 131,
          "end": 136
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 146
        },
        "optional": false,
        "computed": false,
        "start": 131,
        "end": 146
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "OptionProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 157
            },
            "typeArguments": null,
            "start": 147,
            "end": 157
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 159,
            "end": 161
          }
        ],
        "start": 146,
        "end": 162
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 175
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 196,
                          "end": 199
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 195,
                        "end": 200
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Hello",
                          "raw": "Hello",
                          "start": 200,
                          "end": 205
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 207,
                          "end": 210
                        },
                        "start": 205,
                        "end": 211
                      },
                      "start": 195,
                      "end": 211
                    },
                    "start": 188,
                    "end": 212
                  }
                ],
                "start": 178,
                "end": 218
              },
              "expression": false,
              "start": 175,
              "end": 218
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 169,
            "end": 218
          }
        ],
        "start": 163,
        "end": 220
      },
      "abstract": false,
      "declare": false,
      "start": 113,
      "end": 220
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 233,
                  "end": 243
                },
                "typeArguments": null,
                "start": 233,
                "end": 243
              },
              "start": 231,
              "end": 243
            },
            "start": 228,
            "end": 243
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 246,
            "end": 248
          },
          "definite": false,
          "start": 228,
          "end": 248
        }
      ],
      "declare": false,
      "start": 222,
      "end": 249
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 272
                },
                "typeArguments": null,
                "start": 262,
                "end": 272
              },
              "start": 260,
              "end": 272
            },
            "start": 256,
            "end": 272
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 282
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 284,
                  "end": 285
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 281,
                "end": 285
              }
            ],
            "start": 275,
            "end": 287
          },
          "definite": false,
          "start": 256,
          "end": 287
        }
      ],
      "declare": false,
      "start": 250,
      "end": 287
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 303
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "start": 307,
                "end": 310
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 315,
                    "end": 318
                  },
                  "start": 311,
                  "end": 319
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 320,
                    "end": 321
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 323,
                      "end": 324
                    },
                    "start": 322,
                    "end": 325
                  },
                  "start": 320,
                  "end": 325
                }
              ],
              "selfClosing": true,
              "start": 306,
              "end": 327
            },
            "children": [],
            "closingElement": null,
            "start": 306,
            "end": 327
          },
          "definite": false,
          "start": 302,
          "end": 327
        }
      ],
      "declare": false,
      "start": 298,
      "end": 328
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": null,
            "start": 333,
            "end": 335
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "start": 339,
                "end": 342
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 347,
                    "end": 351
                  },
                  "start": 343,
                  "end": 352
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 353,
                    "end": 354
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Hi",
                    "raw": "\"Hi\"",
                    "start": 355,
                    "end": 359
                  },
                  "start": 353,
                  "end": 359
                }
              ],
              "selfClosing": true,
              "start": 338,
              "end": 361
            },
            "children": [],
            "closingElement": null,
            "start": 338,
            "end": 361
          },
          "definite": false,
          "start": 333,
          "end": 361
        }
      ],
      "declare": false,
      "start": 329,
      "end": 362
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 367,
            "end": 369
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "start": 373,
                "end": 376
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 381,
                    "end": 385
                  },
                  "start": 377,
                  "end": 386
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 387,
                    "end": 388
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 390,
                      "end": 391
                    },
                    "start": 389,
                    "end": 392
                  },
                  "start": 387,
                  "end": 392
                }
              ],
              "selfClosing": true,
              "start": 372,
              "end": 394
            },
            "children": [],
            "closingElement": null,
            "start": 372,
            "end": 394
          },
          "definite": false,
          "start": 367,
          "end": 394
        }
      ],
      "declare": false,
      "start": 363,
      "end": 395
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y3",
            "optional": false,
            "typeAnnotation": null,
            "start": 400,
            "end": 402
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "start": 406,
                "end": 409
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 410,
                    "end": 411
                  },
                  "value": null,
                  "start": 410,
                  "end": 411
                }
              ],
              "selfClosing": true,
              "start": 405,
              "end": 414
            },
            "children": [],
            "closingElement": null,
            "start": 405,
            "end": 414
          },
          "definite": false,
          "start": 400,
          "end": 414
        }
      ],
      "declare": false,
      "start": 396,
      "end": 415
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 415
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 77,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "OptionProp",
    "start": 87,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 113,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "Opt",
    "start": 119,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 123,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 131,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 137,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "OptionProp",
    "start": 147,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 169,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 188,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 195,
    "end": 196
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 196,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 199,
    "end": 200
  },
  {
    "type": "JSXText",
    "value": "Hello",
    "start": 200,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 206,
    "end": 207
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 207,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 222,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "OptionProp",
    "start": 233,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 250,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 256,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "OptionProp",
    "start": 262,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 298,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 306,
    "end": 307
  },
  {
    "type": "JSXIdentifier",
    "value": "Opt",
    "start": 307,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 312,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 315,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 318,
    "end": 319
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 322,
    "end": 323
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 329,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 333,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 338,
    "end": 339
  },
  {
    "type": "JSXIdentifier",
    "value": "Opt",
    "start": 339,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 344,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 347,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "JSXText",
    "value": "\"Hi\"",
    "start": 355,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 363,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 367,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 372,
    "end": 373
  },
  {
    "type": "JSXIdentifier",
    "value": "Opt",
    "start": 373,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 378,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 381,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 385,
    "end": 386
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 389,
    "end": 390
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 396,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "y3",
    "start": 400,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 405,
    "end": 406
  },
  {
    "type": "JSXIdentifier",
    "value": "Opt",
    "start": 406,
    "end": 409
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  }
]
```
