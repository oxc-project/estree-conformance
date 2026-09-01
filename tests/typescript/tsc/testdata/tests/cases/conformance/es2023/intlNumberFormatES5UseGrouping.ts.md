__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 21
          },
          "optional": false,
          "computed": false,
          "start": 4,
          "end": 21
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-GB",
            "raw": "'en-GB'",
            "start": 22,
            "end": 29
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 44
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 46,
                  "end": 50
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 33,
                "end": 50
              }
            ],
            "start": 31,
            "end": 52
          }
        ],
        "start": 0,
        "end": 53
      },
      "directive": null,
      "start": 0,
      "end": 54
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 63
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 76
          },
          "optional": false,
          "computed": false,
          "start": 59,
          "end": 76
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-GB",
            "raw": "'en-GB'",
            "start": 77,
            "end": 84
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 99
                },
                "value": {
                  "type": "Literal",
                  "value": "true",
                  "raw": "'true'",
                  "start": 101,
                  "end": 107
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 88,
                "end": 107
              }
            ],
            "start": 86,
            "end": 109
          }
        ],
        "start": 55,
        "end": 110
      },
      "directive": null,
      "start": 55,
      "end": 111
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 136
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 149
          },
          "optional": false,
          "computed": false,
          "start": 132,
          "end": 149
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-GB",
            "raw": "'en-GB'",
            "start": 150,
            "end": 157
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 172
                },
                "value": {
                  "type": "Literal",
                  "value": "always",
                  "raw": "'always'",
                  "start": 174,
                  "end": 182
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 161,
                "end": 182
              }
            ],
            "start": 159,
            "end": 184
          }
        ],
        "start": 128,
        "end": 185
      },
      "directive": null,
      "start": 128,
      "end": 186
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 212,
                  "end": 223
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 212,
                  "end": 223
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 212,
                "end": 223
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 225
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 236
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NumberFormat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 237,
                    "end": 249
                  },
                  "optional": false,
                  "computed": false,
                  "start": 232,
                  "end": 249
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "en-GB",
                    "raw": "'en-GB'",
                    "start": 250,
                    "end": 257
                  }
                ],
                "start": 228,
                "end": 258
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolvedOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 274
              },
              "optional": false,
              "computed": false,
              "start": 228,
              "end": 274
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 228,
            "end": 276
          },
          "definite": false,
          "start": 210,
          "end": 276
        }
      ],
      "declare": false,
      "start": 204,
      "end": 277
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 277
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "new",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 4,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 9,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 22,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "useGrouping",
    "start": 33,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 55,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 59,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 64,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 77,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "useGrouping",
    "start": 88,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "String",
    "value": "'true'",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 128,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 132,
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
    "value": "NumberFormat",
    "start": 137,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 150,
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
    "type": "Identifier",
    "value": "useGrouping",
    "start": 161,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "String",
    "value": "'always'",
    "start": 174,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 204,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "useGrouping",
    "start": 212,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 228,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 232,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 237,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "String",
    "value": "'en-GB'",
    "start": 250,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "resolvedOptions",
    "start": 259,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  }
]
```
