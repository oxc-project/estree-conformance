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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 16
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 10,
            "end": 18
          },
          "definite": false,
          "start": 6,
          "end": 18
        }
      ],
      "declare": false,
      "start": 0,
      "end": 19
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 37
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "initializer": {
              "type": "Literal",
              "value": "k",
              "raw": "'k'",
              "start": 48,
              "end": 51
            },
            "computed": false,
            "start": 44,
            "end": 51
          }
        ],
        "start": 38,
        "end": 54
      },
      "const": true,
      "declare": false,
      "start": 21,
      "end": 54
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 69
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 81
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 88
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 89,
                      "end": 95
                    }
                  ],
                  "start": 88,
                  "end": 96
                },
                "start": 85,
                "end": 96
              },
              "start": 83,
              "end": 96
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 76,
            "end": 97
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 119
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 120,
                          "end": 126
                        }
                      ],
                      "start": 119,
                      "end": 127
                    },
                    "start": 111,
                    "end": 127
                  },
                  "start": 109,
                  "end": 127
                },
                "start": 108,
                "end": 127
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 102,
            "end": 129
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 141
            },
            "computed": true,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 149
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 150,
                      "end": 156
                    }
                  ],
                  "start": 149,
                  "end": 157
                },
                "start": 146,
                "end": 157
              },
              "start": 144,
              "end": 157
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 135,
            "end": 158
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 169
            },
            "computed": true,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 182
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 183,
                          "end": 189
                        }
                      ],
                      "start": 182,
                      "end": 190
                    },
                    "start": 174,
                    "end": 190
                  },
                  "start": 172,
                  "end": 190
                },
                "start": 171,
                "end": 190
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 163,
            "end": 192
          }
        ],
        "start": 70,
        "end": 194
      },
      "declare": false,
      "start": 56,
      "end": 194
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
            "name": "foo",
            "optional": false,
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
                  "start": 215,
                  "end": 218
                },
                "typeArguments": null,
                "start": 215,
                "end": 218
              },
              "start": 213,
              "end": 218
            },
            "start": 210,
            "end": 218
          },
          "init": null,
          "definite": false,
          "start": 210,
          "end": 218
        }
      ],
      "declare": true,
      "start": 196,
      "end": 219
    },
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 224
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 226
          },
          "optional": false,
          "computed": false,
          "start": 221,
          "end": 226
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "foo",
              "raw": "'foo'",
              "start": 230,
              "end": 235
            }
          ],
          "start": 229,
          "end": 236
        },
        "start": 221,
        "end": 236
      },
      "directive": null,
      "start": 221,
      "end": 237
    },
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 241
          },
          "property": {
            "type": "Literal",
            "value": "k",
            "raw": "'k'",
            "start": 242,
            "end": 245
          },
          "optional": false,
          "computed": true,
          "start": 238,
          "end": 246
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "foo",
              "raw": "'foo'",
              "start": 250,
              "end": 255
            }
          ],
          "start": 249,
          "end": 256
        },
        "start": 238,
        "end": 256
      },
      "directive": null,
      "start": 238,
      "end": 257
    },
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 261
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 267
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 269
            },
            "optional": false,
            "computed": false,
            "start": 262,
            "end": 269
          },
          "optional": false,
          "computed": true,
          "start": 258,
          "end": 270
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "foo",
              "raw": "'foo'",
              "start": 274,
              "end": 279
            }
          ],
          "start": 273,
          "end": 280
        },
        "start": 258,
        "end": 280
      },
      "directive": null,
      "start": 258,
      "end": 281
    },
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 285
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 287
          },
          "optional": false,
          "computed": true,
          "start": 282,
          "end": 288
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "foo",
              "raw": "'foo'",
              "start": 292,
              "end": 297
            }
          ],
          "start": 291,
          "end": 298
        },
        "start": 282,
        "end": 298
      },
      "directive": null,
      "start": 282,
      "end": 299
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 299
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 10,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 21,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 27,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 32,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47
  },
  {
    "type": "String",
    "value": "'k'",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 56,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 66,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 76,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 102,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 108,
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
    "value": "Iterable",
    "start": 111,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 120,
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
    "value": ")",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 146,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 174,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
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
    "type": "Identifier",
    "value": "declare",
    "start": 196,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 204,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 210,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 215,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 229,
    "end": 230
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 230,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 238,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 241,
    "end": 242
  },
  {
    "type": "String",
    "value": "'k'",
    "start": 242,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 249,
    "end": 250
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 250,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 258,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 262,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 273,
    "end": 274
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 274,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 282,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 291,
    "end": 292
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 292,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  }
]
```
