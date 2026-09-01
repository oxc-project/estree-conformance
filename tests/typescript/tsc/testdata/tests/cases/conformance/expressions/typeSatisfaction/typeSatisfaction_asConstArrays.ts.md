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
            "name": "arr1",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 33
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 37,
                    "end": 38
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 40,
                    "end": 41
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 43,
                    "end": 44
                  }
                ],
                "start": 36,
                "end": 45
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 54
                },
                "typeArguments": null,
                "start": 49,
                "end": 54
              },
              "start": 36,
              "end": 54
            },
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 74,
                  "end": 81
                },
                "start": 74,
                "end": 83
              },
              "start": 65,
              "end": 83
            },
            "start": 36,
            "end": 83
          },
          "definite": false,
          "start": 29,
          "end": 83
        }
      ],
      "declare": false,
      "start": 23,
      "end": 83
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
            "name": "arr2",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 117
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 121,
                    "end": 122
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 124,
                    "end": 125
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 127,
                    "end": 128
                  }
                ],
                "start": 120,
                "end": 129
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 133,
                  "end": 138
                },
                "typeArguments": null,
                "start": 133,
                "end": 138
              },
              "start": 120,
              "end": 138
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 149,
                "end": 156
              },
              "start": 149,
              "end": 158
            },
            "start": 120,
            "end": 158
          },
          "definite": false,
          "start": 113,
          "end": 158
        }
      ],
      "declare": false,
      "start": 107,
      "end": 158
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 158
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 23,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "arr1",
    "start": 29,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 36,
    "end": 37
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 41,
    "end": 42
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 46,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 49,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 55,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 65,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 74,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 107,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "arr2",
    "start": 113,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 120,
    "end": 121
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 122,
    "end": 123
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 130,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 133,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 139,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 149,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 157,
    "end": 158
  }
]
```
