__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 12,
            "end": 16
          },
          "definite": false,
          "start": 4,
          "end": 16
        }
      ],
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 22
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringify",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 32
          },
          "optional": false,
          "computed": false,
          "start": 18,
          "end": 32
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 38
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 49
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 51,
            "end": 52
          }
        ],
        "optional": false,
        "start": 18,
        "end": 53
      },
      "directive": null,
      "start": 18,
      "end": 54
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 59
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringify",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 69
          },
          "optional": false,
          "computed": false,
          "start": 55,
          "end": 69
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 75
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 77,
            "end": 81
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 83,
            "end": 84
          }
        ],
        "optional": false,
        "start": 55,
        "end": 85
      },
      "directive": null,
      "start": 55,
      "end": 86
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 91
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringify",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 101
          },
          "optional": false,
          "computed": false,
          "start": 87,
          "end": 101
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 107
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 110,
                "end": 113
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 115,
                "end": 116
              }
            ],
            "start": 109,
            "end": 117
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 119,
            "end": 120
          }
        ],
        "optional": false,
        "start": 87,
        "end": 121
      },
      "directive": null,
      "start": 87,
      "end": 122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 127
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringify",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 137
          },
          "optional": false,
          "computed": false,
          "start": 123,
          "end": 137
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 143
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 147
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 161
            },
            "id": null,
            "generator": false,
            "start": 145,
            "end": 161
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 163,
            "end": 164
          }
        ],
        "optional": false,
        "start": 123,
        "end": 165
      },
      "directive": null,
      "start": 123,
      "end": 166
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 171
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringify",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 181
          },
          "optional": false,
          "computed": false,
          "start": 167,
          "end": 181
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 187
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 198
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 200,
            "end": 201
          }
        ],
        "optional": false,
        "start": 167,
        "end": 202
      },
      "directive": null,
      "start": 167,
      "end": 203
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 203
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 4,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Null",
    "value": "null",
    "start": 12,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 18,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "stringify",
    "start": 23,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 33,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 40,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 49,
    "end": 50
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "type": "Identifier",
    "value": "JSON",
    "start": 55,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "stringify",
    "start": 60,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 70,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Null",
    "value": "null",
    "start": 77,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "stringify",
    "start": 92,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 102,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 109,
    "end": 110
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 110,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 113,
    "end": 114
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 117,
    "end": 118
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 123,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "stringify",
    "start": 128,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 138,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 149,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 152,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 161,
    "end": 162
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "stringify",
    "start": 172,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 182,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 189,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 198,
    "end": 199
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  }
]
```
