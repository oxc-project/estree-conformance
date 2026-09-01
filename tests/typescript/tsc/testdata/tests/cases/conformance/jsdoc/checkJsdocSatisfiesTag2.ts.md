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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 77
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
                  "name": "isEven",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 118,
                  "end": 124
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 126,
                      "end": 127
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 131,
                        "end": 132
                      },
                      "operator": "%",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 135,
                        "end": 136
                      },
                      "start": 131,
                      "end": 136
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 141,
                      "end": 142
                    },
                    "start": 131,
                    "end": 142
                  },
                  "id": null,
                  "generator": false,
                  "start": 126,
                  "end": 142
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 118,
                "end": 142
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isOdd",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 153
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 155,
                      "end": 156
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 160,
                        "end": 161
                      },
                      "operator": "%",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 164,
                        "end": 165
                      },
                      "start": 160,
                      "end": 165
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 170,
                      "end": 171
                    },
                    "start": 160,
                    "end": 171
                  },
                  "id": null,
                  "generator": false,
                  "start": 155,
                  "end": 171
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 148,
                "end": 171
              }
            ],
            "start": 112,
            "end": 173
          },
          "definite": false,
          "start": 76,
          "end": 174
        }
      ],
      "declare": false,
      "start": 70,
      "end": 175
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 70,
  "end": 175
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 70,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "isEven",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 128,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 133,
    "end": 134
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 137,
    "end": 140
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "isOdd",
    "start": 148,
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
    "value": "n",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 157,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 162,
    "end": 163
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 166,
    "end": 169
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  }
]
```
