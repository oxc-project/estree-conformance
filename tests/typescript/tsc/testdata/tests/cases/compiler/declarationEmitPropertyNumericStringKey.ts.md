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
            "name": "STATUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 69
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "404",
                    "raw": "\"404\"",
                    "start": 79,
                    "end": 84
                  },
                  "value": {
                    "type": "Literal",
                    "value": "not found",
                    "raw": "\"not found\"",
                    "start": 87,
                    "end": 98
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 78,
                  "end": 98
                }
              ],
              "start": 72,
              "end": 101
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 110
              },
              "typeArguments": null,
              "start": 105,
              "end": 110
            },
            "start": 72,
            "end": 110
          },
          "definite": false,
          "start": 63,
          "end": 110
        }
      ],
      "declare": false,
      "start": 57,
      "end": 111
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
            "name": "hundredStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 129
          },
          "init": {
            "type": "Literal",
            "value": "100",
            "raw": "\"100\"",
            "start": 132,
            "end": 137
          },
          "definite": false,
          "start": 119,
          "end": 137
        }
      ],
      "declare": false,
      "start": 113,
      "end": 138
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
            "typeAnnotation": null,
            "start": 145,
            "end": 148
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
                  "name": "hundredStr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 164
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 167,
                  "end": 172
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 153,
                "end": 172
              }
            ],
            "start": 151,
            "end": 174
          },
          "definite": false,
          "start": 145,
          "end": 174
        }
      ],
      "declare": false,
      "start": 139,
      "end": 175
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
            "name": "hundredNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 193
          },
          "init": {
            "type": "Literal",
            "value": 100,
            "raw": "100",
            "start": 196,
            "end": 199
          },
          "definite": false,
          "start": 183,
          "end": 199
        }
      ],
      "declare": false,
      "start": 177,
      "end": 200
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 211
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
                  "name": "hundredNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 227
                },
                "value": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 230,
                  "end": 235
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 216,
                "end": 235
              }
            ],
            "start": 214,
            "end": 237
          },
          "definite": false,
          "start": 207,
          "end": 237
        }
      ],
      "declare": false,
      "start": 201,
      "end": 238
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 238
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "STATUS",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 78,
    "end": 79
  },
  {
    "type": "String",
    "value": "\"404\"",
    "start": 79,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "String",
    "value": "\"not found\"",
    "start": 87,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 102,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 105,
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
    "value": "const",
    "start": 113,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "hundredStr",
    "start": 119,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "String",
    "value": "\"100\"",
    "start": 132,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 139,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "hundredStr",
    "start": 154,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 167,
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
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 177,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "hundredNum",
    "start": 183,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 194,
    "end": 195
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 196,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 201,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 207,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "hundredNum",
    "start": 217,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 230,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  }
]
```
