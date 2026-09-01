__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 18,
                    "end": 20
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 22,
                      "end": 28
                    },
                    "start": 20,
                    "end": 28
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 18,
                  "end": 29
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 30,
                    "end": 34
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 37,
                      "end": 43
                    },
                    "start": 35,
                    "end": 43
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 30,
                  "end": 44
                }
              ],
              "start": 16,
              "end": 46
            },
            "start": 14,
            "end": 46
          },
          "start": 13,
          "end": 46
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 49,
          "end": 53
        },
        "start": 47,
        "end": 53
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 54
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
          "start": 55,
          "end": 58
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 63
                },
                "value": {
                  "type": "Literal",
                  "value": 1234,
                  "raw": "1234",
                  "start": 65,
                  "end": 69
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 61,
                "end": 69
              }
            ],
            "start": 59,
            "end": 71
          }
        ],
        "optional": false,
        "start": 55,
        "end": 72
      },
      "directive": null,
      "start": 55,
      "end": 73
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
          "start": 96,
          "end": 99
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 104
                },
                "value": {
                  "type": "Literal",
                  "value": 1234,
                  "raw": "1234",
                  "start": 106,
                  "end": 110
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 102,
                "end": 110
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 116
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 118,
                  "end": 125
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 112,
                "end": 125
              }
            ],
            "start": 100,
            "end": 127
          }
        ],
        "optional": false,
        "start": 96,
        "end": 128
      },
      "directive": null,
      "start": 96,
      "end": 129
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
          "start": 137,
          "end": 140
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 145
                },
                "value": {
                  "type": "Literal",
                  "value": 1234,
                  "raw": "1234",
                  "start": 147,
                  "end": 151
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 143,
                "end": 151
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 153,
                  "end": 157
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 159,
                  "end": 164
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 153,
                "end": 164
              }
            ],
            "start": 141,
            "end": 166
          }
        ],
        "optional": false,
        "start": 137,
        "end": 167
      },
      "directive": null,
      "start": 137,
      "end": 168
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
          "start": 201,
          "end": 204
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 211
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 213,
                  "end": 220
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 207,
                "end": 220
              }
            ],
            "start": 205,
            "end": 222
          }
        ],
        "optional": false,
        "start": 201,
        "end": 223
      },
      "directive": null,
      "start": 201,
      "end": 224
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 269
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 30,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 49,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 61,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Numeric",
    "value": "1234",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 96,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 102,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Numeric",
    "value": "1234",
    "start": 106,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 112,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 118,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "foo",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 143,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Numeric",
    "value": "1234",
    "start": 147,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 153,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 159,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 207,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 213,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  }
]
```
