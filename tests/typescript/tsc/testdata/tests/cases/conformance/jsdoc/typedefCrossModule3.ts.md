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
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 37
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 40,
            "end": 42
          },
          "definite": false,
          "start": 35,
          "end": 42
        }
      ],
      "declare": false,
      "start": 29,
      "end": 43
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 46
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 50
          },
          "optional": false,
          "computed": false,
          "start": 44,
          "end": 50
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 59,
            "end": 61
          },
          "abstract": false,
          "declare": false,
          "start": 53,
          "end": 61
        },
        "start": 44,
        "end": 61
      },
      "directive": null,
      "start": 44,
      "end": 61
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 68
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 76
          },
          "optional": false,
          "computed": false,
          "start": 62,
          "end": 76
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 81
        },
        "start": 62,
        "end": 81
      },
      "directive": null,
      "start": 62,
      "end": 82
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 83
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 29,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 35,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 44,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 47,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 53,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 69,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 79,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  }
]
```
