__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "base",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 18
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 19,
        "end": 22
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 22
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "abc",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 40
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "base",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 53
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "xyz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 67
                },
                "typeArguments": null,
                "start": 64,
                "end": 67
              },
              "start": 62,
              "end": 67
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 59,
            "end": 68
          }
        ],
        "start": 54,
        "end": 70
      },
      "abstract": false,
      "declare": true,
      "start": 23,
      "end": 70
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "xyz",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 88
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "abc",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 100
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 101,
        "end": 104
      },
      "abstract": false,
      "declare": true,
      "start": 71,
      "end": 104
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 114
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 124
            },
            "typeArguments": null,
            "arguments": [],
            "start": 117,
            "end": 126
          },
          "definite": false,
          "start": 111,
          "end": 126
        }
      ],
      "declare": false,
      "start": 107,
      "end": 127
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 165
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
    "value": "class",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 14,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 23,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 31,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 37,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 41,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 49,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 59,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 71,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 79,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 85,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 89,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 97,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 107,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  }
]
```
