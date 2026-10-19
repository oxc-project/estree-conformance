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
            "name": "pr",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 8
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 15,
                "end": 19
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "PluralRules",
                "optional": false,
                "typeAnnotation": null,
                "start": 20,
                "end": 31
              },
              "optional": false,
              "computed": false,
              "start": 15,
              "end": 31
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-US",
                "raw": "\"en-US\"",
                "start": 32,
                "end": 39
              }
            ],
            "start": 11,
            "end": 40
          },
          "definite": false,
          "start": 6,
          "end": 40
        }
      ],
      "declare": false,
      "start": 0,
      "end": 41
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
            "name": "category",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 56
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "pr",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 61
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "selectRange",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 73
              },
              "optional": false,
              "computed": false,
              "start": 59,
              "end": 73
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 74,
                "end": 75
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 77,
                "end": 78
              }
            ],
            "optional": false,
            "start": 59,
            "end": 79
          },
          "definite": false,
          "start": 48,
          "end": 79
        }
      ],
      "declare": false,
      "start": 42,
      "end": 80
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
            "name": "exact",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 99
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "LDMLPluralRule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 100,
                    "end": 114
                  },
                  "start": 95,
                  "end": 114
                },
                "typeArguments": null,
                "start": 95,
                "end": 114
              },
              "start": 93,
              "end": 114
            },
            "start": 88,
            "end": 114
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "category",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 125
          },
          "definite": false,
          "start": 88,
          "end": 125
        }
      ],
      "declare": false,
      "start": 82,
      "end": 126
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 126
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "pr",
    "start": 6,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 11,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 15,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "PluralRules",
    "start": 20,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "String",
    "value": "\"en-US\"",
    "start": 32,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 42,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "category",
    "start": 48,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "pr",
    "start": 59,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "selectRange",
    "start": 62,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 82,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "exact",
    "start": 88,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 95,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "LDMLPluralRule",
    "start": 100,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "category",
    "start": 117,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  }
]
```
