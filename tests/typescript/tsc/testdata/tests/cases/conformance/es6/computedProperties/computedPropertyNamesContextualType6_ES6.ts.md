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
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          }
        ],
        "start": 11,
        "end": 14
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 25,
                    "end": 31
                  },
                  "start": 23,
                  "end": 31
                },
                "start": 22,
                "end": 31
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 35
                },
                "typeArguments": null,
                "start": 34,
                "end": 35
              },
              "start": 32,
              "end": 35
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 21,
            "end": 36
          }
        ],
        "start": 15,
        "end": 38
      },
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 60
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 61,
            "end": 62
          }
        ],
        "start": 60,
        "end": 63
      },
      "params": [
        {
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 70
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 71,
                      "end": 72
                    },
                    "typeArguments": null,
                    "start": 71,
                    "end": 72
                  }
                ],
                "start": 70,
                "end": 73
              },
              "start": 69,
              "end": 73
            },
            "start": 67,
            "end": 73
          },
          "start": 64,
          "end": 73
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 77
          },
          "typeArguments": null,
          "start": 76,
          "end": 77
        },
        "start": 74,
        "end": 77
      },
      "body": null,
      "expression": false,
      "start": 40,
      "end": 77
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
          "start": 79,
          "end": 82
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 90
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 92,
                  "end": 94
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 89,
                "end": 94
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 100,
                  "end": 101
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 109,
                    "end": 112
                  },
                  "id": null,
                  "generator": false,
                  "start": 103,
                  "end": 112
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 100,
                "end": 112
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 119,
                    "end": 123
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "bye",
                    "raw": "\"bye\"",
                    "start": 126,
                    "end": 131
                  },
                  "start": 119,
                  "end": 131
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 134,
                  "end": 138
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 118,
                "end": 138
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 145,
                    "end": 146
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 149,
                    "end": 150
                  },
                  "start": 145,
                  "end": 150
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 153,
                  "end": 154
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 144,
                "end": 154
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "UnaryExpression",
                  "operator": "+",
                  "argument": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 162,
                    "end": 166
                  },
                  "prefix": true,
                  "start": 161,
                  "end": 166
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 170,
                      "end": 171
                    }
                  ],
                  "start": 169,
                  "end": 172
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 160,
                "end": 172
              }
            ],
            "start": 83,
            "end": 174
          }
        ],
        "optional": false,
        "start": 79,
        "end": 175
      },
      "directive": null,
      "start": 79,
      "end": 176
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 176
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 40,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 48,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 72,
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
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 79,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 92,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 106,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 118,
    "end": 119
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 124,
    "end": 125
  },
  {
    "type": "String",
    "value": "\"bye\"",
    "start": 126,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 134,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 144,
    "end": 145
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 147,
    "end": 148
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 161,
    "end": 162
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 162,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 169,
    "end": 170
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  }
]
```
