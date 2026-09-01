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
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "const",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 24
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": true,
                    "typeAnnotation": null,
                    "start": 31,
                    "end": 39
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "element",
                    "optional": true,
                    "typeAnnotation": null,
                    "start": 41,
                    "end": 49
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 54,
                    "end": 57
                  },
                  "start": 51,
                  "end": 57
                },
                "start": 26,
                "end": 57
              },
              "start": 24,
              "end": 57
            },
            "accessibility": null,
            "static": false,
            "start": 19,
            "end": 58
          }
        ],
        "start": 13,
        "end": 60
      },
      "declare": false,
      "start": 0,
      "end": 60
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 72
                },
                "typeArguments": null,
                "start": 70,
                "end": 72
              },
              "start": 68,
              "end": 72
            },
            "start": 67,
            "end": 72
          },
          "init": null,
          "definite": false,
          "start": 67,
          "end": 72
        }
      ],
      "declare": false,
      "start": 63,
      "end": 73
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 77
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 83
              },
              "optional": false,
              "computed": false,
              "start": 76,
              "end": 83
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 93
            },
            "optional": false,
            "computed": false,
            "start": 76,
            "end": 93
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 98
          },
          "optional": false,
          "computed": false,
          "start": 76,
          "end": 98
        },
        "right": {
          "type": "Literal",
          "value": "yo",
          "raw": "\"yo\"",
          "start": 101,
          "end": 105
        },
        "start": 76,
        "end": 105
      },
      "directive": null,
      "start": 76,
      "end": 106
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 106
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
    "value": "I1",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 19,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 26,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 31,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "element",
    "start": 41,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 51,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 70,
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
    "value": "i",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 78,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 84,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 94,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 99,
    "end": 100
  },
  {
    "type": "String",
    "value": "\"yo\"",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  }
]
```
