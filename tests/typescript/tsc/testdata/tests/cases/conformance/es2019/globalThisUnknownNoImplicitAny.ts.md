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
            "name": "win",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Window",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 17,
                      "end": 23
                    },
                    "typeArguments": null,
                    "start": 17,
                    "end": 23
                  },
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "globalThis",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 33,
                      "end": 43
                    },
                    "typeArguments": null,
                    "start": 26,
                    "end": 43
                  }
                ],
                "start": 17,
                "end": 43
              },
              "start": 15,
              "end": 43
            },
            "start": 12,
            "end": 43
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 43
        }
      ],
      "declare": true,
      "start": 0,
      "end": 44
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "win",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 82
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "hi",
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 85
        },
        "optional": false,
        "computed": false,
        "start": 79,
        "end": 85
      },
      "directive": null,
      "start": 79,
      "end": 85
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "ThisExpression",
          "start": 86,
          "end": 90
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "hi",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 93
        },
        "optional": false,
        "computed": false,
        "start": 86,
        "end": 93
      },
      "directive": null,
      "start": 86,
      "end": 93
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "globalThis",
          "optional": false,
          "typeAnnotation": null,
          "start": 94,
          "end": 104
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "hi",
          "optional": false,
          "typeAnnotation": null,
          "start": 105,
          "end": 107
        },
        "optional": false,
        "computed": false,
        "start": 94,
        "end": 107
      },
      "directive": null,
      "start": 94,
      "end": 107
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "win",
          "optional": false,
          "typeAnnotation": null,
          "start": 109,
          "end": 112
        },
        "property": {
          "type": "Literal",
          "value": "hi",
          "raw": "'hi'",
          "start": 113,
          "end": 117
        },
        "optional": false,
        "computed": true,
        "start": 109,
        "end": 118
      },
      "directive": null,
      "start": 109,
      "end": 118
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "ThisExpression",
          "start": 119,
          "end": 123
        },
        "property": {
          "type": "Literal",
          "value": "hi",
          "raw": "'hi'",
          "start": 124,
          "end": 128
        },
        "optional": false,
        "computed": true,
        "start": 119,
        "end": 129
      },
      "directive": null,
      "start": 119,
      "end": 129
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "globalThis",
          "optional": false,
          "typeAnnotation": null,
          "start": 130,
          "end": 140
        },
        "property": {
          "type": "Literal",
          "value": "hi",
          "raw": "'hi'",
          "start": 141,
          "end": 145
        },
        "optional": false,
        "computed": true,
        "start": 130,
        "end": 146
      },
      "directive": null,
      "start": 130,
      "end": 146
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 146
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "win",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 26,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 33,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "win",
    "start": 79,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "hi",
    "start": 83,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "hi",
    "start": 91,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 94,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "hi",
    "start": 105,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "win",
    "start": 109,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 112,
    "end": 113
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 113,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 123,
    "end": 124
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 124,
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
    "value": "globalThis",
    "start": 130,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 140,
    "end": 141
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 141,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 145,
    "end": 146
  }
]
```
