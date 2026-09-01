__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 35
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 45
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "accessibility": null,
            "static": false,
            "start": 42,
            "end": 54
          }
        ],
        "start": 36,
        "end": 56
      },
      "declare": false,
      "start": 22,
      "end": 56
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 70
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 80
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 82,
                "end": 88
              },
              "start": 80,
              "end": 88
            },
            "accessibility": null,
            "static": false,
            "start": 77,
            "end": 89
          }
        ],
        "start": 71,
        "end": 91
      },
      "declare": false,
      "start": 57,
      "end": 91
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isFoo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 108
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 117,
              "end": 119
            },
            "start": 115,
            "end": 119
          },
          "start": 109,
          "end": 119
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 128
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 135
              },
              "typeArguments": null,
              "start": 132,
              "end": 135
            },
            "start": 132,
            "end": 135
          },
          "start": 122,
          "end": 135
        },
        "start": 120,
        "end": 135
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 149,
                "end": 154
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "object",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 164
              },
              "start": 149,
              "end": 164
            },
            "start": 142,
            "end": 165
          }
        ],
        "start": 136,
        "end": 167
      },
      "expression": false,
      "start": 93,
      "end": 167
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isFoo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 184
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 191,
              "end": 195
            },
            "start": 189,
            "end": 195
          },
          "start": 185,
          "end": 195
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 205,
              "end": 207
            },
            "start": 203,
            "end": 207
          },
          "start": 197,
          "end": 207
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 216
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 223
              },
              "typeArguments": null,
              "start": 220,
              "end": 223
            },
            "start": 220,
            "end": 223
          },
          "start": 210,
          "end": 223
        },
        "start": 208,
        "end": 223
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 237,
                "end": 242
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "object",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 252
              },
              "start": 237,
              "end": 252
            },
            "start": 230,
            "end": 253
          }
        ],
        "start": 224,
        "end": 255
      },
      "expression": false,
      "start": 169,
      "end": 255
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
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 275,
                      "end": 278
                    },
                    "typeArguments": null,
                    "start": 275,
                    "end": 278
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 281,
                      "end": 284
                    },
                    "typeArguments": null,
                    "start": 281,
                    "end": 284
                  }
                ],
                "start": 275,
                "end": 284
              },
              "start": 273,
              "end": 284
            },
            "start": 269,
            "end": 284
          },
          "init": null,
          "definite": false,
          "start": 269,
          "end": 284
        }
      ],
      "declare": true,
      "start": 257,
      "end": 285
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 291,
          "end": 297
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 302
          }
        ],
        "optional": false,
        "start": 291,
        "end": 303
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 315
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 319
                },
                "optional": false,
                "computed": false,
                "start": 311,
                "end": 319
              },
              "right": {
                "type": "Literal",
                "value": "hi",
                "raw": "'hi'",
                "start": 322,
                "end": 326
              },
              "start": 311,
              "end": 326
            },
            "directive": null,
            "start": 311,
            "end": 327
          }
        ],
        "start": 305,
        "end": 329
      },
      "alternate": null,
      "start": 287,
      "end": 329
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 335,
          "end": 341
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 342,
            "end": 346
          }
        ],
        "optional": false,
        "start": 335,
        "end": 347
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 355,
                  "end": 359
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 360,
                  "end": 363
                },
                "optional": false,
                "computed": false,
                "start": 355,
                "end": 363
              },
              "right": {
                "type": "Literal",
                "value": "hi",
                "raw": "'hi'",
                "start": 366,
                "end": 370
              },
              "start": 355,
              "end": 370
            },
            "directive": null,
            "start": 355,
            "end": 371
          }
        ],
        "start": 349,
        "end": 373
      },
      "alternate": null,
      "start": 331,
      "end": 373
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 373
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 22,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 57,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 67,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 93,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "isFoo1",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "object",
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
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 122,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 129,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 132,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 142,
    "end": 148
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 149,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 155,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 169,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "isFoo2",
    "start": 178,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 185,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 191,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 197,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 210,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 217,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 220,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 230,
    "end": 236
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 237,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 243,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 246,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 257,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 265,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 275,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 281,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 287,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "isFoo1",
    "start": 291,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 298,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 311,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 316,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 320,
    "end": 321
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 322,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 331,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "isFoo2",
    "start": 335,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 342,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 355,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 360,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 364,
    "end": 365
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 366,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  }
]
```
