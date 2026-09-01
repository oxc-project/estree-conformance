__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 14,
                      "end": 15
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 17,
                      "end": 18
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 14,
                    "end": 18
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 20,
                      "end": 21
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 23,
                      "end": 24
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 20,
                    "end": 24
                  }
                ],
                "start": 13,
                "end": 25
              }
            ],
            "start": 12,
            "end": 26
          },
          "definite": false,
          "start": 4,
          "end": 26
        }
      ],
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 38,
                    "end": 39
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 38,
                    "end": 39
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 38,
                  "end": 39
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 44,
                    "end": 48
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 41,
                  "end": 48
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 50
            },
            "init": null,
            "definite": false,
            "start": 36,
            "end": 50
          }
        ],
        "declare": false,
        "start": 32,
        "end": 50
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 59
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "void",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 71
          },
          "prefix": true,
          "start": 65,
          "end": 71
        },
        "directive": null,
        "start": 65,
        "end": 71
      },
      "start": 27,
      "end": 71
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 71
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "array",
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
    "type": "Punctuator",
    "value": "[",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 41,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 44,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 51,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 54,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 65,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 70,
    "end": 71
  }
]
```
