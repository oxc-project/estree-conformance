__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 12,
                  "end": 18
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 21,
                  "end": 30
                }
              ],
              "start": 12,
              "end": 30
            },
            "start": 11,
            "end": 33
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 36,
            "end": 45
          }
        ],
        "start": 11,
        "end": 45
      },
      "declare": false,
      "start": 0,
      "end": 46
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
                  "start": 59,
                  "end": 62
                },
                "typeArguments": null,
                "start": 59,
                "end": 62
              },
              "start": 57,
              "end": 62
            },
            "start": 54,
            "end": 62
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 66,
                "end": 67
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 69,
                "end": 70
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 72,
                "end": 73
              }
            ],
            "start": 65,
            "end": 74
          },
          "definite": false,
          "start": 54,
          "end": 74
        }
      ],
      "declare": false,
      "start": 48,
      "end": 75
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
            "name": "index",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 87
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 90,
            "end": 91
          },
          "definite": false,
          "start": 82,
          "end": 91
        }
      ],
      "declare": false,
      "start": 76,
      "end": 92
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 101
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 115
            },
            "start": 98,
            "end": 115
          },
          "operator": "&&",
          "right": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 122
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": null,
                "start": 123,
                "end": 128
              },
              "optional": false,
              "computed": true,
              "start": 119,
              "end": 129
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 143
            },
            "start": 119,
            "end": 143
          },
          "start": 98,
          "end": 143
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 150
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "index",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 156
            },
            "optional": false,
            "computed": true,
            "start": 147,
            "end": 157
          },
          "operator": ">=",
          "right": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 161,
            "end": 162
          },
          "start": 147,
          "end": 162
        },
        "start": 98,
        "end": 162
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 173
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 179
              },
              "optional": false,
              "computed": true,
              "start": 170,
              "end": 180
            },
            "directive": null,
            "start": 170,
            "end": 180
          }
        ],
        "start": 164,
        "end": 192
      },
      "alternate": null,
      "start": 94,
      "end": 192
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 192
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 5,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 12,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 21,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 36,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 48,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 59,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 65,
    "end": 66
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 67,
    "end": 68
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "const",
    "start": 76,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 82,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 88,
    "end": 89
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 102,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 106,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 116,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 130,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 134,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 144,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 147,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 151,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 158,
    "end": 160
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 170,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 174,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  }
]
```
