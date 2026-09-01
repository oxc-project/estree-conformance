__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 8,
        "end": 11
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 23
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 37
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 46
              },
              "optional": false,
              "computed": false,
              "start": 31,
              "end": 46
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 52,
                      "end": 53
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 52,
                    "end": 53
                  }
                ],
                "start": 50,
                "end": 55
              },
              "start": 48,
              "end": 55
            },
            "accessibility": null,
            "static": false,
            "start": 30,
            "end": 56
          }
        ],
        "start": 24,
        "end": 58
      },
      "declare": false,
      "start": 12,
      "end": 58
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 80
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "typeArguments": null,
              "start": 84,
              "end": 85
            },
            "start": 82,
            "end": 85
          },
          "start": 81,
          "end": 85
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 89
          },
          "typeArguments": null,
          "start": 88,
          "end": 89
        },
        "start": 86,
        "end": 89
      },
      "body": null,
      "expression": false,
      "start": 60,
      "end": 90
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 111
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 115,
              "end": 118
            },
            "start": 113,
            "end": 118
          },
          "start": 112,
          "end": 118
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 121,
          "end": 124
        },
        "start": 119,
        "end": 124
      },
      "body": null,
      "expression": false,
      "start": 91,
      "end": 125
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 147
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 152
              },
              "typeArguments": null,
              "start": 151,
              "end": 152
            },
            "start": 149,
            "end": 152
          },
          "start": 148,
          "end": 152
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 156
          },
          "typeArguments": null,
          "start": 155,
          "end": 156
        },
        "start": 153,
        "end": 156
      },
      "body": null,
      "expression": false,
      "start": 127,
      "end": 157
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 178
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 182,
              "end": 185
            },
            "start": 180,
            "end": 185
          },
          "start": 179,
          "end": 185
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 188,
          "end": 191
        },
        "start": 186,
        "end": 191
      },
      "body": null,
      "expression": false,
      "start": 158,
      "end": 192
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 194,
          "end": 197
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 203
            },
            "typeArguments": null,
            "arguments": [],
            "start": 198,
            "end": 203
          }
        ],
        "optional": false,
        "start": 194,
        "end": 204
      },
      "directive": null,
      "start": 194,
      "end": 205
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 214
                },
                "typeArguments": null,
                "start": 213,
                "end": 214
              },
              "start": 211,
              "end": 214
            },
            "start": 210,
            "end": 214
          },
          "init": null,
          "definite": false,
          "start": 210,
          "end": 214
        }
      ],
      "declare": false,
      "start": 206,
      "end": 215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 216,
          "end": 219
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 221
          }
        ],
        "optional": false,
        "start": 216,
        "end": 222
      },
      "directive": null,
      "start": 216,
      "end": 223
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 223
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 12,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 38,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 60,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 68,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 91,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 99,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 108,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 115,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 127,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 135,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 144,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 158,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 166,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 182,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 188,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 194,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 198,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 206,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 216,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  }
]
```
