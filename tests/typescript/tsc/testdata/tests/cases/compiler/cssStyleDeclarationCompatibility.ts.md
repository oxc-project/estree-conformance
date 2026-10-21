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
            "name": "element",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTMLElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 34
                },
                "typeArguments": null,
                "start": 23,
                "end": 34
              },
              "start": 21,
              "end": 34
            },
            "start": 14,
            "end": 34
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 34
        }
      ],
      "declare": true,
      "start": 0,
      "end": 35
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
            "name": "style",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CSSStyleDeclaration",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 68
                },
                "typeArguments": null,
                "start": 49,
                "end": 68
              },
              "start": 47,
              "end": 68
            },
            "start": 42,
            "end": 68
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "element",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 78
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "style",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 84
            },
            "optional": false,
            "computed": false,
            "start": 71,
            "end": 84
          },
          "definite": false,
          "start": 42,
          "end": 84
        }
      ],
      "declare": false,
      "start": 36,
      "end": 85
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "element",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 97
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "style",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 103
              },
              "optional": false,
              "computed": false,
              "start": 90,
              "end": 103
            },
            "start": 87,
            "end": 103
          }
        ],
        "start": 86,
        "end": 104
      },
      "directive": null,
      "start": 86,
      "end": 105
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 105
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 14,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 23,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 36,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 42,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "CSSStyleDeclaration",
    "start": 49,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 71,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 79,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 87,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 90,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 98,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  }
]
```
